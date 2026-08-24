# Tahona visual: «Ascenso»

Dirección de arte para la visualización inmediatamente posterior al hero. Sustituye las dos aproximaciones anteriores:

- la v1 era un storyboard SVG vacío y genérico;
- la v2 corregía densidad, pero mantenía tres plataformas iguales y centradas;
- **Ascenso** convierte la pila en una transformación diagonal con ritmo, escala y masa asimétrica.

El SVG es un **plano de composición para image-to-image**, no el acabado final. La pieza final debe producirse como render de resina y montarse manualmente.

## Narrativa

La lectura va de abajo-izquierda a arriba-derecha:

1. **Contexto real**: una plataforma grande, densa y anclada. Contiene herramientas, documentos, datos, personas, validaciones y un proceso existente.
2. **Recorrido Tahona**: tres módulos independientes y exactamente equivalentes, unidos por un rail ascendente:
   - estrategia y arquitectura;
   - IA aplicada y supervisada;
   - producto y software.
3. **Sistema en uso**: una plataforma más pequeña, ligera y ordenada con documentos, datos, validación e interfaz conectados.

No hay caja Tahona, hub central, middleware, cerebro de IA ni fábrica.

## Activos

### Composición desktop

- `assets/tahona-ascent-composition.svg` — 2560 × 1440
- `assets/tahona-ascent-composition.png` — 2400 × 1350

### Recomposición móvil

- `assets/tahona-ascent-mobile.svg` — 1080 × 1350
- `assets/tahona-ascent-mobile.png` — 2400 × 3000

### Zonas aisladas para Recraft

- `assets/layer-context-v2.svg` / `.png` — 2400 × 1600
- `assets/layer-capabilities-v2.svg` / `.png` — 2400 × 1600
- `assets/layer-system-v2.svg` / `.png` — 2400 × 1600

### Referencias de material

- `style-references/01-layered-resin.png`
- `style-references/02-process-gates.png`
- `style-references/03-connected-modules.png`
- `style-references/04-exploded-stack.png`

### Herramientas

- `generate_scene.py`: regenera desktop, móvil y las tres zonas.
- `compositor.html`: monta tres PNG transparentes en 2560 × 1440 y exporta el resultado.
- `index.html`: tablero revisable.

## Custom style de Recraft

Crear `Tahona Resin Systems · Ascenso` con **Recraft V3 → Illustration → Style essentials**.

| Referencia | Peso inicial |
|---|---:|
| `01-layered-resin.png` | 35 % |
| `02-process-gates.png` | 25 % |
| `03-connected-modules.png` | 25 % |
| `04-exploded-stack.png` | 15 % |

Style prompt:

```text
Premium isometric 3D product illustration made from translucent matte resin and frosted glass. Softly rounded modular geometry, deep Tahona forest-green cores, milky mint-white shells, subtle pale-green edges, controlled subsurface scattering, soft top-left studio light, broad natural contact shadows, restrained corporate technology aesthetic, exact geometry and generous warm-white negative space.
```

La referencia externa se usa para gramática espacial, no como referencia de identidad.

## Zona 1: contexto real

Referencia: `assets/layer-context-v2.png`

Strength inicial: **0.30–0.38**.

```text
A premium isometric operating-context landscape on one large low translucent resin platform. Preserve the exact camera and object placement from the composition reference. Show a deliberately heterogeneous real business operation: working documents, two existing software interface modules, structured data storage, two human review stations, one explicit validation checkpoint, small adapters and one continuous process route. Use varied object scales and asymmetrical clusters. The scene must feel dense and grounded, but not chaotic or sector-specific. Frosted pale-green glass platform, deep Tahona forest-green resin objects, soft studio light, no text.
```

Gate:

- 9–12 objetos;
- escala variada, no cuadrícula perfecta;
- un recorrido principal;
- sin maquinaria o símbolos sectoriales.

## Zona 2: recorrido Tahona

Referencia: `assets/layer-capabilities-v2.png`

Strength inicial: **0.25–0.33**.

```text
A premium isometric ascending transformation arc with exactly three independent principal modules. Preserve the camera, S-curve rail and module positions from the composition reference. The modules must have identical footprint, platform thickness, height and visual contrast. They do not share a base platform.

First module: strategy and architecture, expressed as a precise spatial blueprint grid, decision nodes and structural relationships.

Second module: applied supervised AI, expressed as a document and data path passing through three translucent processing gates with explicit validation. No brain, robot, spark, orb or chatbot.

Third module: product and software, expressed as a focused usable interface connected to integration ports and reusable components.

A continuous translucent green resin rail passes through all three modules and rises toward the finished system. Small validation rings sit on the rail. None of the modules is central or dominant. Tahona forest-green resin, mint-white frosted glass, exact isometric geometry, no text, no logos.
```

Gate manual obligatorio:

- medir los tres módulos;
- igualar anchura, altura, espesor y contraste;
- descartar cualquier IA más brillante o central;
- evitar que producto parezca un dashboard SaaS genérico;
- el rail guía la lectura, pero nunca se convierte en protagonista.

## Zona 3: sistema en uso

Referencia: `assets/layer-system-v2.png`

Strength inicial: **0.30–0.40**.

```text
A premium isometric operational system already in use on one small light translucent resin platform. Preserve the camera and compact composition from the reference. Connect four practical parts through one shallow validated workflow: working documents, human approval, structured knowledge and data, and a focused user interface. The result must feel lighter, simpler and more resolved than the operating context. The center is only a low workflow surface, never a hub, logo tile or proprietary platform. Milky mint-white resin, restrained Tahona green accents, soft top-left studio light, broad subtle shadows, no text, no logos.
```

Gate:

- menos objetos y más espacio que en contexto;
- plataforma aproximadamente 55–60 % del ancho visual del contexto;
- flujo central bajo;
- sin nombre de producto ni apariencia de plataforma Tahona.

## Negative prompt

```text
brand logos, provider logos, readable text, letters, numbers, pseudo-text, central Tahona box, central hub, middleware platform, brain icon, robot, humanoid, chatbot, glowing AI orb, magic spark, industrial factory, ship, truck, warehouse, hospital, scales of justice, gears, puzzle pieces, cybersecurity shield, server racks, circuit board, city skyline, blue, purple, red, neon, black background, chrome, glossy toy plastic, photorealistic office, crowded infographic, duplicated objects, fused objects, inconsistent perspective, inconsistent module scale, hard shadows
```

## Producción

Para cada zona:

1. Generar cuatro variantes.
2. Elegir por geometría, jerarquía y cámara, no por brillo.
3. Corregir objetos deformes y pseudo-texto con inpainting.
4. Mantener shadow/contact AO local.
5. Eliminar el fondo sin borrar los bordes Fresnel.
6. Exportar PNG transparente a 2400 × 1600.
7. No cambiar cámara entre variantes finales.

## Montaje desktop

Abrir `compositor.html`.

Valores iniciales para el lienzo 2560 × 1440:

| Zona | X | Y | Ancho |
|---|---:|---:|---:|
| Contexto | 100 | 685 | 1200 |
| Capacidades | 790 | 140 | 1440 |
| Sistema | 1470 | -80 | 1200 |

Orden:

1. contexto;
2. arco de capacidades y rail;
3. sistema.

Pasada final:

- contexto 8–12 % más suave y frío;
- capacidades con el máximo contraste controlado;
- sistema ligeramente más brillante y cálido;
- unificar exposición, roughness y bordes;
- corregir oclusión del rail al entrar y salir de los módulos;
- añadir etiquetas solo en HTML.

## Móvil

No recortar el desktop. Usar `tahona-ascent-mobile.svg` como nueva referencia 4:5.

- el rail forma una S vertical;
- contexto permanece abajo;
- los tres módulos reducen escala, no número;
- el sistema conserva aire arriba;
- eliminar adaptadores pequeños antes de reducir los módulos principales.

## Copy recomendado

- Eyebrow: `De principio a fin`
- H2: `Del contexto real a un sistema que funciona.`
- Apoyo: `Estrategia, producto y tecnología en un mismo equipo.`

Callouts HTML:

1. `Contexto real`
2. `Estrategia y arquitectura · IA · Producto y software`
3. `Producto o sistema en uso`

## Gate de integración

No pasa a homepage si:

- la progresión no se entiende a 390 px;
- IA domina la zona central;
- los tres módulos no son equivalentes;
- parece una plataforma propietaria;
- remite a un sector concreto;
- contiene logos o pseudo-texto;
- cambia la cámara entre zonas;
- el rail parece una tubería de middleware;
- el acabado no pertenece a la familia de resina Tahona.
