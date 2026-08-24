from __future__ import annotations

from pathlib import Path
from typing import Iterable

ROOT = Path(__file__).parent
OUT = ROOT / "assets"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 2560, 1440
C = {
    "bg": "#F6F4EF",
    "paper": "#FBFAF7",
    "paper2": "#EDEBE5",
    "paper3": "#D8D6D0",
    "line": "#4A4E49",
    "lineSoft": "#8B918A",
    "green": "#2D6A4F",
    "greenDark": "#173F2B",
    "greenMid": "#5E9278",
    "greenLight": "#BFD8CA",
    "mint": "#E7F1EB",
    "white": "#FFFFFF",
}

COS = 0.8660254038
SIN = 0.5


def p(origin: tuple[float, float], x: float, y: float, z: float = 0) -> tuple[float, float]:
    ox, oy = origin
    return ox + (x - y) * COS, oy + (x + y) * SIN - z


def pts(values: Iterable[tuple[float, float]]) -> str:
    return " ".join(f"{x:.1f},{y:.1f}" for x, y in values)


def polygon(values, *, fill: str, stroke: str = C["line"], sw: float = 2, opacity: float = 1, extra: str = "") -> str:
    return f'<polygon points="{pts(values)}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round" opacity="{opacity}" {extra}/>'


def line(a, b, *, stroke: str = C["line"], sw: float = 2, dash: str | None = None, opacity: float = 1, extra: str = "") -> str:
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="{stroke}" stroke-width="{sw}" stroke-linecap="round" opacity="{opacity}"{d} {extra}/>'


def path(d: str, *, stroke: str = C["line"], sw: float = 2, fill: str = "none", dash: str | None = None, opacity: float = 1, extra: str = "") -> str:
    dd = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round" opacity="{opacity}"{dd} {extra}/>'


def iso_box(origin, x, y, z, w, d, h, *, top="#FBFAF7", left="#D7D8D2", right="#C5C8C1", stroke=C["line"], sw: float = 2, opacity: float = 1, shadow=False, radius=False) -> str:
    # x/y are center coordinates on the isometric floor.
    x0, x1 = x - w / 2, x + w / 2
    y0, y1 = y - d / 2, y + d / 2
    b = [p(origin, x0, y0, z), p(origin, x1, y0, z), p(origin, x1, y1, z), p(origin, x0, y1, z)]
    t = [p(origin, x0, y0, z + h), p(origin, x1, y0, z + h), p(origin, x1, y1, z + h), p(origin, x0, y1, z + h)]
    klass = ' filter="url(#shadow)"' if shadow else ""
    return (
        f'<g opacity="{opacity}"{klass}>'
        + polygon([b[3], b[2], t[2], t[3]], fill=left, stroke=stroke, sw=sw)
        + polygon([b[1], b[2], t[2], t[1]], fill=right, stroke=stroke, sw=sw)
        + polygon(t, fill=top, stroke=stroke, sw=sw)
        + "</g>"
    )


def plate(origin, opacity=1, accent=False) -> str:
    base = iso_box(origin, 0, 0, 0, 760, 480, 34, top="url(#plateTop)", left="url(#plateLeft)", right="url(#plateRight)", stroke=C["line"], sw=2.3, opacity=opacity, shadow=True)
    # inset rail: gives the plate internal architecture instead of empty acreage
    z = 36
    inner = [p(origin, -320, -182, z), p(origin, 320, -182, z), p(origin, 320, 182, z), p(origin, -320, 182, z)]
    rail = polygon(inner, fill="none", stroke=C["greenMid"] if accent else C["lineSoft"], sw=1.4, opacity=.5)
    corners = []
    for x, y in [(-320, -182), (320, -182), (320, 182), (-320, 182)]:
        sx, sy = p(origin, x, y, z + 1)
        corners.append(f'<circle cx="{sx:.1f}" cy="{sy:.1f}" r="4.2" fill="{C["white"]}" stroke="{C["green"]}" stroke-width="2"/>')
    return base + rail + "".join(corners)


def top_line(origin, coordinates, z=60, stroke=C["green"], sw: float = 3, dash=None, opacity: float = 1, marker=False) -> str:
    ps = [p(origin, x, y, z) for x, y in coordinates]
    d = "M " + " L ".join(f"{x:.1f} {y:.1f}" for x, y in ps)
    return path(d, stroke=stroke, sw=sw, dash=dash, opacity=opacity, extra='marker-end="url(#arrow)"' if marker else "")


def circuit_node(origin, x, y, z=61, r: float = 6, fill=C["paper"], stroke=C["green"], sw: float = 2.5) -> str:
    sx, sy = p(origin, x, y, z)
    return f'<circle cx="{sx:.1f}" cy="{sy:.1f}" r="{r}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'


def document_stack(origin, x, y, z=36, scale=1.0, dark=False) -> str:
    s = []
    for i in range(3):
        s.append(iso_box(origin, x, y, z + i * 12 * scale, 92 * scale, 66 * scale, 10 * scale,
                         top=C["mint"] if not dark else C["green"], left="#D7E7DE", right="#B8CFC1", stroke=C["line"], sw=1.5))
    for off in (-14, 0, 14):
        s.append(top_line(origin, [(x - 27 * scale, y + off * .42 * scale), (x + 22 * scale, y + off * .42 * scale)], z + 38 * scale, stroke=C["lineSoft"] if not dark else C["white"], sw=1.5))
    return "".join(s)


def database(origin, x, y, z=38, scale=1.0) -> str:
    cx, cy = p(origin, x, y, z + 27 * scale)
    w, h = 72 * scale, 58 * scale
    return f'''<g filter="url(#miniShadow)">
      <rect x="{cx-w/2:.1f}" y="{cy-h/2:.1f}" width="{w:.1f}" height="{h:.1f}" fill="{C['greenDark']}" stroke="{C['line']}" stroke-width="1.7"/>
      <ellipse cx="{cx:.1f}" cy="{cy-h/2:.1f}" rx="{w/2:.1f}" ry="{13*scale:.1f}" fill="{C['green']}" stroke="{C['line']}" stroke-width="1.7"/>
      <ellipse cx="{cx:.1f}" cy="{cy+h/2:.1f}" rx="{w/2:.1f}" ry="{13*scale:.1f}" fill="{C['greenDark']}" stroke="{C['line']}" stroke-width="1.7"/>
      <path d="M {cx-w/2:.1f} {cy:.1f} Q {cx:.1f} {cy+13*scale:.1f} {cx+w/2:.1f} {cy:.1f}" fill="none" stroke="{C['greenLight']}" stroke-width="1.5"/>
    </g>'''


def screen(origin, x, y, z=38, scale=1.0, active=True) -> str:
    base = iso_box(origin, x, y, z, 116 * scale, 78 * scale, 13 * scale, top=C["mint"], left="#D5E3DB", right="#B9CFC1", stroke=C["line"], sw=1.6, shadow=True)
    cx, cy = p(origin, x + 4 * scale, y - 5 * scale, z + 68 * scale)
    fill = "url(#screenGreen)" if active else C["paper"]
    body = f'''<g filter="url(#miniShadow)">
      <rect x="{cx-47*scale:.1f}" y="{cy-34*scale:.1f}" width="{94*scale:.1f}" height="{68*scale:.1f}" rx="{10*scale:.1f}" fill="{fill}" stroke="{C['line']}" stroke-width="1.8"/>
      <rect x="{cx-31*scale:.1f}" y="{cy-17*scale:.1f}" width="{62*scale:.1f}" height="{8*scale:.1f}" rx="4" fill="{C['greenLight'] if active else C['paper3']}"/>
      <rect x="{cx-31*scale:.1f}" y="{cy+1*scale:.1f}" width="{25*scale:.1f}" height="{19*scale:.1f}" rx="4" fill="{C['mint']}"/>
      <rect x="{cx+2*scale:.1f}" y="{cy+1*scale:.1f}" width="{29*scale:.1f}" height="{19*scale:.1f}" rx="4" fill="{C['greenMid']}" opacity=".75"/>
    </g>'''
    return base + body


def approval(origin, x, y, z=38, scale=1.0) -> str:
    s = iso_box(origin, x, y, z, 78 * scale, 62 * scale, 16 * scale, top=C["green"], left="#285C46", right=C["greenDark"], stroke=C["line"], sw=1.6, shadow=True)
    cx, cy = p(origin, x, y, z + 27 * scale)
    tick = path(f"M {cx-20*scale:.1f} {cy:.1f} L {cx-6*scale:.1f} {cy+14*scale:.1f} L {cx+24*scale:.1f} {cy-19*scale:.1f}", stroke=C["white"], sw=7*scale)
    return s + tick


def person_station(origin, x, y, z=38, scale=1.0) -> str:
    base = iso_box(origin, x, y, z, 78 * scale, 64 * scale, 12 * scale, top=C["paper"], left=C["paper2"], right=C["paper3"], stroke=C["line"], sw=1.5)
    cx, cy = p(origin, x, y, z + 49 * scale)
    return base + f'''<g>
      <circle cx="{cx:.1f}" cy="{cy-15*scale:.1f}" r="{11*scale:.1f}" fill="{C['paper']}" stroke="{C['green']}" stroke-width="2"/>
      <path d="M {cx-22*scale:.1f} {cy+19*scale:.1f} Q {cx:.1f} {cy-1*scale:.1f} {cx+22*scale:.1f} {cy+19*scale:.1f}" fill="{C['mint']}" stroke="{C['green']}" stroke-width="2"/>
    </g>'''


def adapter(origin, x, y, z=38, scale=1, kind="port") -> str:
    base = iso_box(origin, x, y, z, 60 * scale, 48 * scale, 14 * scale, top=C["paper"], left=C["paper2"], right=C["paper3"], stroke=C["line"], sw=1.4)
    cx, cy = p(origin, x, y, z + 23 * scale)
    if kind == "port":
        icon = f'<rect x="{cx-15*scale:.1f}" y="{cy-8*scale:.1f}" width="{30*scale:.1f}" height="{16*scale:.1f}" rx="4" fill="none" stroke="{C["green"]}" stroke-width="2"/><circle cx="{cx-7*scale:.1f}" cy="{cy:.1f}" r="2.5" fill="{C["green"]}"/><circle cx="{cx+7*scale:.1f}" cy="{cy:.1f}" r="2.5" fill="{C["green"]}"/>'
    elif kind == "doc":
        icon = f'<path d="M {cx-12*scale:.1f} {cy-14*scale:.1f} H {cx+7*scale:.1f} L {cx+14*scale:.1f} {cy-7*scale:.1f} V {cy+14*scale:.1f} H {cx-12*scale:.1f} Z" fill="none" stroke="{C["green"]}" stroke-width="2"/>'
    else:
        icon = f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="10" fill="none" stroke="{C["green"]}" stroke-width="2"/><circle cx="{cx:.1f}" cy="{cy:.1f}" r="3" fill="{C["green"]}"/>'
    return base + icon


def architecture_module(origin, x, y, z=38) -> str:
    s = [iso_box(origin, x, y, z, 205, 144, 24, top="url(#moduleTop)", left="#C6D9CE", right="#9DBBAB", stroke=C["line"], sw=2, shadow=True)]
    zt = z + 26
    # blueprint grid and nodes
    for dx in (-62, -20, 22, 64):
        s.append(top_line(origin, [(x+dx, y-50), (x+dx, y+50)], zt, stroke=C["greenLight"], sw=1.4))
    for dy in (-42, 0, 42):
        s.append(top_line(origin, [(x-78, y+dy), (x+78, y+dy)], zt, stroke=C["greenLight"], sw=1.4))
    for dx, dy in [(-62,-42),(-20,0),(22,42),(64,-42),(-62,42)]:
        s.append(circuit_node(origin, x+dx, y+dy, zt+2, r=5, fill=C["paper"], stroke=C["green"]))
    return "".join(s)


def ai_module(origin, x, y, z=38) -> str:
    s = [iso_box(origin, x, y, z, 205, 144, 24, top="url(#moduleTop)", left="#C6D9CE", right="#9DBBAB", stroke=C["line"], sw=2, shadow=True)]
    zt = z + 27
    s.append(top_line(origin, [(x-78,y+24),(x+78,y-24)], zt+8, stroke=C["greenLight"], sw=5))
    for i, dx in enumerate((-54, 0, 54)):
        cx, cy = p(origin, x+dx, y-dx*.18, zt+46)
        s.append(f'<rect x="{cx-14:.1f}" y="{cy-38:.1f}" width="28" height="76" rx="14" fill="{C["paper"]}" stroke="{C["green"]}" stroke-width="2" opacity=".96"/>')
    # supervised checkpoint instead of AI brain
    s.append(circuit_node(origin, x+78, y-24, zt+8, r=7, fill=C["paper"], stroke=C["green"]))
    return "".join(s)


def product_module(origin, x, y, z=38) -> str:
    s = [iso_box(origin, x, y, z, 205, 144, 24, top="url(#moduleTop)", left="#C6D9CE", right="#9DBBAB", stroke=C["line"], sw=2, shadow=True)]
    zt = z + 27
    # interface nested directly into top plane
    corners = [(x-76,y-48),(x+76,y-48),(x+76,y+48),(x-76,y+48)]
    s.append(polygon([p(origin,*q,zt+1) for q in corners], fill=C["greenDark"], stroke=C["green"], sw=1.5))
    s.append(top_line(origin, [(x-58,y-28),(x+48,y-28)], zt+3, stroke=C["greenLight"], sw=7))
    s.append(top_line(origin, [(x-58,y),(x-12,y)], zt+3, stroke=C["mint"], sw=13))
    s.append(top_line(origin, [(x+2,y),(x+48,y)], zt+3, stroke=C["greenMid"], sw=13))
    s.append(top_line(origin, [(x-58,y+28),(x+48,y+28)], zt+3, stroke=C["greenLight"], sw=7))
    return "".join(s)


def bottom_context(origin) -> str:
    z=36
    s=[plate(origin, opacity=.9)]
    # Four deliberate clusters, not evenly scattered icons.
    s += [
        document_stack(origin, -205, -85, z, .82),
        adapter(origin, -95, -122, z, .85, "doc"),
        screen(origin, -18, -148, z, .54, active=False),
        database(origin, 215, -82, z, .82),
        screen(origin, 198, 92, z, .78, active=False),
        person_station(origin, 78, 132, z, .82),
        person_station(origin, -28, 154, z, .56),
        approval(origin, -190, 118, z, .76),
        adapter(origin, -294, 12, z, .60, "port"),
        adapter(origin, 292, 26, z, .60, "doc"),
    ]
    # Main process trace crosses the whole operating context.
    route=[(-275,65),(-205,25),(-120,58),(-25,18),(65,56),(150,18),(265,52)]
    s.append(top_line(origin, route, z+18, stroke=C["green"], sw=4, marker=True))
    for i,(x,y) in enumerate(route[:-1]):
        s.append(circuit_node(origin,x,y,z+18,r=6 if i not in (2,4) else 8))
    # Thin secondary traces indicate real-world fragmentation.
    s.append(top_line(origin,[(-250,-145),(-130,-145),(-74,-88)],z+6,stroke=C["lineSoft"],sw=1.5,dash="4 7",opacity=.75))
    s.append(top_line(origin,[(260,-130),(142,-130),(94,-70)],z+6,stroke=C["lineSoft"],sw=1.5,dash="4 7",opacity=.75))
    return "".join(s)


def middle_capabilities(origin) -> str:
    z=36
    s=[plate(origin, opacity=.97, accent=True)]
    # Three equal capability modules: deliberate asymmetry in details, not scale.
    s += [
        architecture_module(origin,-205,-10,z),
        ai_module(origin,0,0,z),
        product_module(origin,205,10,z),
    ]
    # Integration adapters at perimeter, creating density like a real systems layer.
    for x,y,k in [(-292,-142,"doc"),(-92,-156,"port"),(98,-156,"data"),(292,-126,"port"),(-292,132,"data"),(-90,155,"doc"),(105,154,"port"),(292,120,"doc")]:
        s.append(adapter(origin,x,y,z,.66,k))
    # Green delivery spine with branches into all three modules.
    spine=[(-310,88),(-250,92),(-154,76),(-62,98),(24,68),(120,94),(215,74),(310,88)]
    s.append(top_line(origin,spine,z+10,stroke=C["green"],sw=4.2,marker=True))
    for x,y in spine[1:-1]:
        s.append(circuit_node(origin,x,y,z+10,r=4.8,fill=C["paper"],stroke=C["green"]))
    for x in (-205,0,205):
        s.append(top_line(origin,[(x,76),(x,40)],z+12,stroke=C["greenMid"],sw=2.2,dash="5 6"))
    # Fine graphite traces keep the layer architectural rather than iconographic.
    for y in (-125,125):
        s.append(top_line(origin,[(-260,y),(-150,y),(0,y*.8),(150,y),(260,y)],z+6,stroke=C["lineSoft"],sw=1.3,opacity=.75))
    return "".join(s)


def top_system(origin) -> str:
    z=36
    s=[plate(origin, opacity=1, accent=True)]
    # A resolved operating surface: four connected zones, no Tahona hub.
    s += [
        document_stack(origin,-220,-70,z,.72,dark=False),
        screen(origin,225,-58,z,.78,active=True),
        approval(origin,-178,116,z,.76),
        database(origin,190,110,z,.72),
    ]
    # central workflow table is a product surface, not a logo tile
    s.append(iso_box(origin,0,18,z,250,170,18,top="url(#moduleTop)",left="#C6D9CE",right="#9DBBAB",stroke=C["green"],sw=2.2,shadow=True))
    # one calm closed workflow loop
    workflow=[(-78,-22),(-22,-52),(52,-32),(82,18),(40,66),(-28,62),(-82,28),(-78,-22)]
    s.append(top_line(origin,workflow,z+23,stroke=C["greenDark"],sw=4))
    for x,y in workflow[:-1]:
        s.append(circuit_node(origin,x,y,z+24,r=6,fill=C["paper"],stroke=C["green"],sw=2))
    # Connections to outcome modules
    for a,b in [((-82,28),(-178,116)),((-22,-52),(-220,-70)),((52,-32),(225,-58)),((40,66),(190,110))]:
        s.append(top_line(origin,[a,b],z+17,stroke=C["green"],sw=2.5,opacity=.9))
    # small state/feedback adapters
    for x,y,k in [(-300,28,"port"),(298,28,"data"),(0,-155,"doc"),(0,158,"port")]:
        s.append(adapter(origin,x,y,z,.6,k))
    return "".join(s)


def compact_system(origin) -> str:
    """Resolved system: smaller, lighter and less dense than the operating context."""
    z = 28
    s = [
        iso_box(origin, 0, 0, 0, 450, 275, 28,
                top="url(#systemPlateTop)", left="#E2ECE6", right="#C6D9CE",
                stroke=C["line"], sw=2.0, shadow=True),
        iso_box(origin, 0, 8, z, 170, 105, 13,
                top="url(#moduleTop)", left="#D5E4DC", right="#B4CCBF",
                stroke=C["green"], sw=1.8, shadow=True),
        document_stack(origin, -105, -55, z, .48),
        database(origin, 105, -52, z, .46),
        approval(origin, -88, 72, z, .52),
        screen(origin, 92, 68, z, .53, active=True),
    ]
    workflow = [(-58, -19), (-8, -37), (54, -12), (58, 30), (5, 45), (-55, 24), (-58, -19)]
    s.append(top_line(origin, workflow, z + 17, stroke=C["green"], sw=3.3))
    for x, y in workflow[:-1]:
        s.append(circuit_node(origin, x, y, z + 18, r=4.6, fill=C["paper"], stroke=C["green"]))
    for a, b in [((-55, 24), (-88, 72)), ((-8, -37), (-105, -55)), ((54, -12), (105, -52)), ((58, 30), (92, 68))]:
        s.append(top_line(origin, [a, b], z + 13, stroke=C["greenMid"], sw=1.8, opacity=.9))
    return "".join(s)


def capabilities_arc() -> str:
    """Three equal modules following an ascending path; no shared platform or central hub."""
    strategy_o = (1060, 785)
    ai_o = (1450, 610)
    product_o = (1840, 735)
    s = []
    rail = "M 1040 1010 C 1055 920 1000 855 1060 790 C 1180 655 1325 630 1450 620 C 1630 606 1735 686 1840 724 C 1940 758 1960 565 2030 455"
    s.append(path(rail, stroke="#B7D5C4", sw=24, opacity=.52, extra='filter="url(#miniShadow)"'))
    s.append(path(rail, stroke=C["green"], sw=7, opacity=.92, extra='marker-end="url(#arrow)"'))
    for x, y in [(1047, 900), (1245, 666), (1650, 634), (1952, 645)]:
        s.append(f'<circle cx="{x}" cy="{y}" r="15" fill="#FCFEFD" fill-opacity=".86" stroke="{C["green"]}" stroke-width="4"/>')
        s.append(f'<circle cx="{x}" cy="{y}" r="5" fill="{C["green"]}"/>')
    s += [
        architecture_module(strategy_o, 0, 0, 0),
        ai_module(ai_o, 0, 0, 0),
        product_module(product_o, 0, 0, 0),
    ]
    return "".join(s)


def mobile_capabilities_arc() -> str:
    """A dedicated 4:5 recomposition rather than a crop of desktop."""
    s = []
    rail = "M 360 1030 C 320 905 305 825 355 765 C 430 675 505 640 545 600 C 620 530 695 620 745 715 C 790 800 790 540 800 425"
    s.append(path(rail, stroke="#B7D5C4", sw=18, opacity=.52, extra='filter="url(#miniShadow)"'))
    s.append(path(rail, stroke=C["green"], sw=5.5, opacity=.92, extra='marker-end="url(#arrow)"'))
    for x, y in [(330, 865), (480, 660), (670, 625), (780, 615)]:
        s.append(f'<circle cx="{x}" cy="{y}" r="11" fill="#FCFEFD" stroke="{C["green"]}" stroke-width="3"/>')
    modules = [
        (architecture_module((340, 770), 0, 0, 0), 340, 770),
        (ai_module((545, 585), 0, 0, 0), 545, 585),
        (product_module((745, 730), 0, 0, 0), 745, 730),
    ]
    for body, cx, cy in modules:
        s.append(f'<g transform="translate({cx} {cy}) scale(.72) translate({-cx} {-cy})">{body}</g>')
    return "".join(s)


def vertical_connectors(top_o, mid_o, bot_o) -> str:
    s=[]
    # Four rods per gap, aligned in model x/y coordinates.
    for x,y in [(-318,-174),(318,-174),(318,174),(-318,174)]:
        a=p(top_o,x,y,0)
        b=p(mid_o,x,y,70)
        c=p(mid_o,x,y,0)
        d=p(bot_o,x,y,70)
        for u,v in [(a,b),(c,d)]:
            s.append(line(u,v,stroke=C["greenMid"],sw=1.8,dash="5 8",opacity=.65))
            for q in (u,v):
                s.append(f'<circle cx="{q[0]:.1f}" cy="{q[1]:.1f}" r="6" fill="{C["bg"]}" stroke="{C["green"]}" stroke-width="2"/>')
    # A central luminous thread carries work up through the stack.
    a=p(bot_o,0,0,80); b=p(mid_o,0,0,18); c=p(mid_o,0,0,92); d=p(top_o,0,0,18)
    s.append(path(f"M {a[0]:.1f} {a[1]:.1f} C {a[0]-25:.1f} {(a[1]+b[1])/2:.1f} {b[0]+25:.1f} {(a[1]+b[1])/2:.1f} {b[0]:.1f} {b[1]:.1f}",stroke=C["green"],sw=5,opacity=.82))
    s.append(path(f"M {c[0]:.1f} {c[1]:.1f} C {c[0]+25:.1f} {(c[1]+d[1])/2:.1f} {d[0]-25:.1f} {(c[1]+d[1])/2:.1f} {d[0]:.1f} {d[1]:.1f}",stroke=C["green"],sw=5,opacity=.82))
    return "".join(s)


def shared_defs() -> str:
    return f'''<defs>
      <linearGradient id="plateTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".98"/><stop offset=".55" stop-color="#F3F6F2" stop-opacity=".94"/><stop offset="1" stop-color="#DCE9E0" stop-opacity=".96"/></linearGradient>
      <linearGradient id="systemPlateTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".62" stop-color="#F7FBF8"/><stop offset="1" stop-color="#EAF5EF"/></linearGradient>
      <linearGradient id="plateLeft" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E5ECE7"/><stop offset="1" stop-color="#C8D6CD"/></linearGradient>
      <linearGradient id="plateRight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C8D9CF"/><stop offset="1" stop-color="#789B88"/></linearGradient>
      <linearGradient id="moduleTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F5FBF7"/><stop offset="1" stop-color="#DCECE3"/></linearGradient>
      <linearGradient id="systemTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2D6A4F"/><stop offset="1" stop-color="#173F2B"/></linearGradient>
      <linearGradient id="screenGreen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#245840"/><stop offset="1" stop-color="#163C29"/></linearGradient>
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#173F2B" flood-opacity=".18"/></filter>
      <filter id="miniShadow" x="-60%" y="-60%" width="220%" height="240%"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#173F2B" flood-opacity=".18"/></filter>
      <radialGradient id="ground" cx="50%" cy="46%" r="58%"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".72" stop-color="#F7F5F1"/><stop offset="1" stop-color="#EEEAE3"/></radialGradient>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
    </defs>'''


def make_svg() -> str:
    # "Ascenso": dense operating context at lower left, three equal capabilities
    # on an ascending rail, and a smaller resolved system at upper right.
    context_o = (700, 1090)
    system_o = (2070, 325)
    defs = shared_defs()
    bg = f'<rect width="{W}" height="{H}" fill="url(#ground)"/>'
    ambient = '<ellipse cx="770" cy="1375" rx="610" ry="55" fill="#173F2B" opacity=".065" filter="url(#miniShadow)"/>'
    content = ambient + bottom_context(context_o) + capabilities_arc() + compact_system(system_o)
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="title desc">
      <title id="title">Tahona ascent composition</title>
      <desc id="desc">A diagonal isometric progression from real operating context through three equal Tahona capabilities to a smaller resolved system in use.</desc>
      {defs}{bg}{content}
    </svg>'''


def make_mobile_svg() -> str:
    width, height = 1080, 1350
    # Context is scaled and anchored lower-left; the three capabilities form a
    # tighter S-curve; the resolved system sits upper-right.
    context = bottom_context((520, 1105))
    context = f'<g transform="translate(520 1105) scale(.73) translate(-520 -1105)">{context}</g>'
    system = compact_system((790, 250))
    system = f'<g transform="translate(790 250) scale(.78) translate(-790 -250)">{system}</g>'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-labelledby="title desc">
      <title id="title">Tahona ascent mobile composition</title>
      <desc id="desc">A dedicated vertical mobile composition from operating context through three equal capabilities to a resolved system.</desc>
      {shared_defs()}
      <rect width="{width}" height="{height}" fill="url(#ground)"/>
      <ellipse cx="390" cy="1290" rx="370" ry="38" fill="#173F2B" opacity=".06" filter="url(#miniShadow)"/>
      {context}{mobile_capabilities_arc()}{system}
    </svg>'''


def make_isolated_layer(kind: str) -> str:
    width, height = 1200, 800
    if kind == "context":
        content = bottom_context((600, 405))
    elif kind == "capabilities":
        # Preserve the desktop arc and camera while fitting it into the reference frame.
        content = f'<g transform="matrix(.78 0 0 .78 -615 -50)">{capabilities_arc()}</g>'
    elif kind == "system":
        content = compact_system((600, 405))
    else:
        raise ValueError(kind)
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img">
      <title>Tahona {kind} layer</title>
      {shared_defs()}
      <rect width="{width}" height="{height}" fill="url(#ground)"/>
      <ellipse cx="600" cy="706" rx="500" ry="42" fill="#173F2B" opacity=".06" filter="url(#miniShadow)"/>
      {content}
    </svg>'''


if __name__ == "__main__":
    (OUT / "tahona-ascent-composition.svg").write_text(make_svg(), encoding="utf-8")
    (OUT / "tahona-ascent-mobile.svg").write_text(make_mobile_svg(), encoding="utf-8")
    for kind in ("context", "capabilities", "system"):
        (OUT / f"layer-{kind}-v2.svg").write_text(make_isolated_layer(kind), encoding="utf-8")
    # Remove superseded equal-platform master if it still exists.
    for stale in ("tahona-system-composition-v2.svg", "tahona-system-composition-v2.png"):
        path_to_remove = OUT / stale
        if path_to_remove.exists():
            path_to_remove.unlink()
    print(f"Generated ascent composition, mobile composition and isolated layers in {OUT}")
