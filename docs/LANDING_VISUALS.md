# Landing: visuales e iconos dither

Inventario de huecos visuales de la landing (`src/components/landing/content.ts`) para producirlos con Codex en estilo **Tahona Dither** (kit: `/Users/danik/tahona/tahona-presentation-kit`). Sustituye al estilo resina 3D anterior.

## Dirección

- Dither ordenado monocromo en la rampa verde Tahona (`#245840`, `#2D6A4F`, `#B7D3C2`, `#D4E8DC`, `#FFFFFF`) sobre blanco.
- Referencias ya aprobadas: `olive-dither-green`, `patio-andaluz-dither`, `dehesa-dither` (paisaje mediterráneo) y `dither-knowledge` (objeto abstracto aislado sobre blanco).
- Paisajes y escenas: mediterráneos, serenos, sin personas reconocibles. Objetos e iconos: abstractos, isométricos, aislados sobre blanco, sin texto.
- Las únicas fotos reales son los retratos del equipo (Carlos, Sergio, Daniel).
- Nada de gradientes IA morados, robots, cerebros ni pantallas genéricas.

## Cómo sustituir un hueco

1. Exportar a `public/images/landing/<slot>.webp` (iconos: `public/images/landing/icons/<slot>.webp` y `.png`).
2. En `content.ts`, cambiar el objeto del hueco de `kind: "pending"` a:
   - visual: `{ kind: "ready", src: "/images/landing/<slot>.webp", alt: "<descripción>" }`
   - icono: `{ kind: "ready", slot: "<slot>", src: "/images/landing/icons/<slot>.webp" }`
3. `bun run build` y `node --test tests/landing-contract.test.mjs`.

Los huecos pendientes se ven en la página como recuadros punteados con la etiqueta `Visual dither · <slot>` y en el DOM como `data-visual-slot` / `data-icon-slot`.

## Visuales

| Slot | Sección | Formato | Brief | Estado |
|---|---|---|---|---|
| `capability-strategy` | Capacidades · Estrategia y arquitectura | 1:1, 1600×1600, objeto sobre blanco | Mapa de decisiones: nodos y caminos que convergen en una ruta | Resuelto |
| `capability-product` | Capacidades · Producto y software | 1:1, 1600×1600, objeto sobre blanco | Interfaces apiladas en isométrico unidas por conectores | Resuelto |
| `case-legal` | Casos · Legal | 4:3, 1600×1200, objeto sobre blanco | Expediente abierto con documentos que fluyen hacia un sello de validación | Resuelto |
| `case-logistics` | Casos · Logística | 4:3, 1600×1200, objeto sobre blanco | Flujos geométricos que convergen en una plataforma y transportan bloques | Resuelto, versión 2 |
| `case-industry` | Casos · Industria alimentaria | 4:3, 1600×1200, objeto sobre blanco | Cajas sobre una cinta geométrica continua con hitos de trazabilidad | Resuelto, versión 2 |
| `case-knowledge` | Casos · Transversal | 4:3, 1600×1200, objeto sobre blanco | Biblioteca de documentos con candados y conexiones a una esfera | Resuelto |
| `case-retail` | Casos · Retail y distribución | 4:3, 1600×1200, objeto sobre blanco | Mostrador geométrico integrado con gráficos de barras y seguimiento | Resuelto, versión 2 |
| `industry-logistics` | Industrias · Logística y transporte | 16:9, 1920×1080, paisaje | Terminal y almacén de un puerto mediterráneo con contenedores y vías de acceso | Resuelto |
| `industry-legal` | Industrias · Legal y gestión documental | 16:9, 1920×1080, paisaje | Biblioteca documental con estanterías y columnas junto a un patio mediterráneo | Resuelto |
| `industry-manufacturing` | Industrias · Industria y alimentación | 16:9, 1920×1080, paisaje | Almazara ibérica con nave de procesamiento y olivos | Resuelto |
| `industry-distribution` | Industrias · Distribución y comercio | 16:9, 1920×1080, paisaje | Mercado mediterráneo con comercios, toldos y puestos sin rótulos | Resuelto |
| `industry-construction` | Industrias · Construcción | 16:9, 1920×1080, paisaje | Estructura de un edificio en obra sobre una ladera ibérica | Resuelto |
| `industry-education` | Industrias · Educación y formación | 16:9, 1920×1080, paisaje | Campus mediterráneo con gradas de aprendizaje y aulas abiertas a un patio | Resuelto |
| `method-path` | Cómo trabajamos | 4:5, 1280×1600, paisaje | Camino entre olivos que avanza por etapas hacia el horizonte | Resuelto |

Ya resueltos con assets del kit: hero (`olive-dither-green`), Sobre Tahona (`patio-andaluz-dither`), cierre (`dehesa-dither`), capacidad IA y caso educación (`dither-knowledge`), onda decorativa de colaboración (`wave-corner`).

## Iconos (cuadrados, 1:1, 512 px, PNG y WebP con transparencia)

| Slot | Uso | Brief | Estado |
|---|---|---|---|
| `icon-strategy` | Capacidad · Estrategia | Brújula sobre un plano de arquitectura en perspectiva | Resuelto |
| `icon-ai` | Capacidad · IA | Esfera conectada a documentos | Resuelto |
| `icon-product` | Capacidad · Producto | Ventanas de interfaz apiladas con un conector | Resuelto |
| `icon-mode-project` | Colaboración · Proyecto | Hito con bandera | Resuelto |
| `icon-mode-product` | Colaboración · Producto | Capas apiladas con flecha ascendente | Resuelto |
| `icon-mode-fractional` | Colaboración · Capacidad senior | Silueta con nodos conectados alrededor | Resuelto |

## Entrega de los lotes 1–5

Los 20 slots están conectados como `ready` en `content.ts`. Los WebP se exportan sin pérdida para conservar los cinco colores exactos; los iconos incluyen también su PNG de 512 px con transparencia. Los visuales pesan menos de 400 KB y los PNG y WebP de iconos menos de 40 KB.

- Hoja de contacto con referencias y pruebas de iconos a 36, 48 y 64 px: `output/landing-visuals-contact-sheet.png`.
- Prompts y referencias por asset, generados con ImageGen integrado: `output/landing-visuals/prompts.json`.
- Comprobación de dimensiones, paleta, transparencia y pesos: `output/landing-visuals/asset-checks.json`.

La lista final confirmada es Logística y transporte, Legal y gestión documental, Industria y alimentación, Distribución y comercio, Construcción, y Educación y formación, en ese orden. Los seis paisajes están conectados en la landing. Logística, trazabilidad y retail tienen nuevas versiones abstractas; los anteriores se conservan en `output/landing-visuals/previous/`.

Hoja de revisión con los casos anteriores y nuevos, y las seis industrias: `output/landing-visuals-revision-contact-sheet.png`.

## Fotos del equipo

`team-carlos`, `team-sergio`, `team-daniel`: retratos reales 4:5. Los del kit (`assets/*.png`) son de 251 px y no sirven; hacen falta originales en alta.
