# Prompt para Codex: visuales e iconos dither de la landing

Copiar todo el bloque siguiente en Codex, abierto en `/Users/danik/tahona/website`, rama `feat/landing-unificada`.

---

Vas a producir los visuales e iconos pendientes de la landing de Tahona en estilo **Tahona Dither** y a conectarlos en el código. Las fotos del equipo NO entran en este encargo.

## Contexto que debes leer primero

1. `docs/LANDING_VISUALS.md`: inventario de huecos, formatos y cómo sustituirlos.
2. `src/components/landing/content.ts`: cada hueco es un objeto `{ kind: "pending", slot, brief, aspect }` (visuales) o `{ kind: "pending", slot, brief }` (iconos).
3. Kit de marca: `/Users/danik/tahona/tahona-presentation-kit` (`GUIA.md`, `source/image-prompts.md`, `source/image-prompts-v2.json`, `source/design-tokens.json`, `assets/`).
4. Referencias de estilo ya aprobadas (úsalas como referencia de técnica y paleta en cada generación):
   - Paisaje: `public/images/landing/olive-dither-green.webp`, `public/images/landing/patio-andaluz-dither.webp`, `public/images/landing/dehesa-dither.webp`.
   - Objeto aislado: `public/images/landing/dither-knowledge.webp`.

## Estilo obligatorio

- Dither/halftone ordenado, nítido y deliberado, como impresión gráfica plana. Nada de grano fotográfico borroso.
- Paleta cerrada: verde profundo `#245840`, verde Tahona `#2D6A4F`, salvia `#B7D3C2`, pálido `#D4E8DC` y blanco. Ningún otro tono: ni azul, ni amarillo, ni naranja, ni morado.
- Sin texto, letras, números, logos ni marcas de agua.
- Sin personas reconocibles. Sin robots, cerebros, circuitos, hologramas ni gradientes de "IA".
- Sin brillo, resina 3D, plástico translúcido ni sombras realistas: si partes de una imagen 3D antigua, tradúcela a dither plano manteniendo el concepto (igual que se hizo con `dither-knowledge`).
- Objetos e iconos: isométricos o en perspectiva suave, siluetas claras, márgenes blancos generosos, fondo blanco puro (iconos con fondo transparente).
- Paisajes: mediterráneos e ibéricos, serenos, composición asimétrica, cielo amplio.

## Encargos, en este orden

### Lote 1: iconos (1:1, 512 px, PNG con transparencia, luego exportar también a WebP)

Deben funcionar a 36–64 px: formas simples, pocas piezas, dither más grueso que en los visuales grandes. Que los seis parezcan de la misma familia.

| Slot | Concepto |
|---|---|
| `icon-strategy` | Brújula sobre un plano de arquitectura en perspectiva |
| `icon-ai` | Esfera central conectada a dos o tres documentos (versión mínima de `dither-knowledge`) |
| `icon-product` | Dos o tres ventanas de interfaz apiladas unidas por un conector |
| `icon-mode-project` | Hito con bandera sobre una base |
| `icon-mode-product` | Capas apiladas con una flecha ascendente |
| `icon-mode-fractional` | Silueta abstracta (sin rasgos) con nodos conectados alrededor |

Guardar en `public/images/landing/icons/<slot>.webp`.

### Lote 2: visuales de capacidades (1:1, 1600 px, objeto centrado sobre blanco)

Se muestran cuadrados en escritorio y 4:3 en móvil con `object-contain`, así que el objeto debe quedar centrado con aire alrededor.

| Slot | Concepto |
|---|---|
| `capability-strategy` | Mapa de decisiones: nodos y caminos que convergen en una ruta clara |
| `capability-product` | Interfaces apiladas en isométrico unidas por conectores |

### Lote 3: visuales de casos (4:3, 1600×1200, objeto centrado sobre blanco)

Si existe la imagen 3D antigua indicada, úsala como referencia de concepto y tradúcela a dither.

| Slot | Concepto | Referencia de concepto |
|---|---|---|
| `case-legal` | Expediente abierto con documentos que fluyen hacia un sello de validación | `public/images/visual-case-legal-document-platform.png` |
| `case-logistics` | Mapa con rutas trazadas entre puntos y un camión en isométrico | `public/images/visual-logistics.png` |
| `case-industry` | Lotes en una cinta con etiquetas y una línea de trazabilidad | `public/images/visual-case-appcc-quality.png` |
| `case-knowledge` | Biblioteca de documentos con candados conectados a una esfera | `public/images/visual-case-enterprise-knowledge.png` |
| `case-retail` | Panel de control con gráficos simples sobre un mostrador | ninguna |

### Lote 4: visual vertical del método (4:5, 1280×1600, paisaje)

| Slot | Concepto |
|---|---|
| `method-path` | Camino de tierra entre olivos que avanza por etapas hacia el horizonte, vertical |

### Lote 5: industrias (16:9, 1920×1080, paisaje)

Lista confirmada el 9 de octubre de 2026 (seis industrias, ver tabla en `docs/LANDING_VISUALS.md`). Antes de generar, comprobar los `slot` de `industries.items` en `content.ts` y generar uno por industria con un paisaje o escena arquitectónica mediterránea alusiva (ver `brief` de cada slot). Referencias de concepto antiguas: `public/images/visual-industry-*.png`.

## Cómo conectar cada asset

1. Exportar visuales a `public/images/landing/<slot>.webp` (calidad ~80, ancho máximo según la tabla).
2. En `content.ts`, sustituir el objeto pendiente:
   - Visual: `{ kind: "ready", src: "/images/landing/<slot>.webp", alt: "<descripción breve en castellano>" }`
   - Icono: `{ kind: "ready", slot: "<slot>", src: "/images/landing/icons/<slot>.webp" }`
3. Marcar el slot como resuelto en `docs/LANDING_VISUALS.md`.
4. Ejecutar `bun run build` y `node --test tests/landing-contract.test.mjs`. Ambos deben pasar.

## Criterios de aceptación

- Puesto junto a `olive-dither-green` y `dither-knowledge`, cada asset parece de la misma serie.
- Ningún píxel fuera de la paleta verde y blanco.
- Iconos legibles a 36 px.
- Pesos razonables: visuales < 400 KB, iconos < 40 KB.
- No tocar componentes, copy ni estilos fuera de los objetos de `content.ts` indicados.
- Entregar una hoja de contacto (`output/landing-visuals-contact-sheet.png`) con todos los assets para revisión.
