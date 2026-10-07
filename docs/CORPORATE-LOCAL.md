# Tahona AI — prueba corporativa local, versión 3

Investigación iniciada el 5 de octubre de 2026; revisión del 6 de octubre. Rama: `codex/pruebas-locales`.

Preparada para producción en la rama de pruebas. El usuario autoriza el push de esta rama, sin desplegar, fusionar, crear etiquetas ni ejecutar acciones de publicación. El workflow y la configuración de publicación se mantienen intactos, junto con los cambios preexistentes del proyecto.

## Fuentes de Tahona

- [Web pública actual](https://tahona.ai/): posicionamiento como partner de principio a fin; capacidades de IA, producto/software y estrategia/arquitectura; industrias y casos anonimizados; método de cinco etapas. Su posicionamiento es más amplio que el del checkout original.
- Componentes locales: integración con herramientas existentes, contexto empresarial, validación humana, cercanía y acompañamiento.
- Resumen ejecutivo local de LogiFlow: contexto de planificación logística. No se trasladan nombres privados, cifras comerciales ni promesas del piloto.
- `docs/business` enlaza a un directorio inexistente en este equipo; esa documentación no ha podido consultarse.

## Referencias internacionales

| Referencia | Patrón observado | Adaptación a Tahona |
| --- | --- | --- |
| [Accenture](https://www.accenture.com/es-es) | Jerarquía de negocio; capacidades, industrias, casos y contenido editorial | Propuesta institucional y navegación clara |
| [Capgemini](https://www.capgemini.com/es-es/) | Cabecera institucional; imágenes de gran formato; movimiento contenido | Dos niveles de navegación y portada ambiental |
| [NTT DATA](https://www.nttdata.com/global/en/) | Estrategia y ejecución; navegación internacional; carrusel con controles | Método completo, idiomas y control explícito de la portada |
| [Globant](https://www.globant.com/) | IA aplicada; historias visuales y carrusel con indicadores | Alternancia de paisajes y tecnología con progreso visible |

La investigación específica sobre movimiento y sus fuentes oficiales está en [CORPORATE-MOTION-REFERENCES.md](CORPORATE-MOTION-REFERENCES.md). Los tiempos y efectos finales de Tahona son decisiones propias: no se han incorporado imágenes, código ni textos extensos de esas consultoras.

## Identidad y contenidos

Se conserva el titular «Tecnología que impulsa el negocio», el logo y la paleta de Tahona: verde `#2D6A4F`, verde profundo `#123422`, superficies `#F0F7F3`, blanco y carbón. Tipografía: Plus Jakarta Sans, Geist Sans y Geist Mono.

El ADN se expresa en acciones concretas: **cercanía**, hablando con el equipo que construye; **agilidad**, con avances frecuentes para probar y ajustar; **confianza**, con alcance claro, decisiones compartidas y revisión humana. Se han reducido las frases abstractas y mantenido los mensajes principales de la propuesta.

América, Europa y China aparecen en la cabecera y en el bloque internacional como horizonte de colaboración. No se afirman oficinas, presencia física, clientes multinacionales, certificaciones, premios ni cifras sin acreditar.

Los casos mantienen las descripciones anonimizadas de la web pública. Las perspectivas son textos originales, sin autores, fechas o informes ficticios.

La auditoría de procesos se incorpora a Estrategia y arquitectura y abre el método de trabajo. Se revisan datos, esperas, tareas repetidas y puntos de bloqueo para localizar cuellos de botella y priorizar mejoras con IA. Este enfoque está presente en los tres idiomas, sin añadir métricas ni promesas de rendimiento.

## Idiomas

Tres rutas estáticas completas, con selector visible en escritorio y móvil:

- `/`: español.
- `/en/`: inglés.
- `/zh/`: chino simplificado, con `lang="zh-CN"`.

La traducción comprende navegación, contenido, metadatos, textos alternativos, etiquetas accesibles, diálogos y formulario, incluidos sus mensajes dinámicos. Al cambiar de idioma se conservan las coordenadas de desplazamiento. Los textos comparten estructura en `src/components/corporate/copy.ts`.

## Imágenes y movimiento

La portada contiene ocho imágenes. Las siete primeras tienen un acabado fotográfico limpio; solo la última conserva el dither original de Tahona.

| Orden | Tema | Recurso y procedencia |
| --- | --- | --- |
| 01 | Arquitectura de vidrio | `photo-architecture.png`, imagen generada |
| 02 | Puerto logístico | `photo-logistics.png`, imagen generada |
| 03 | Shanghái | `photo-city-source.jpg`, fotografía real de krzhck / Unsplash, 3.200 × 1.800 px |
| 04 | Naturaleza alpina: agua y bosque | `photo-nature.png`, imagen generada |
| 05 | Centro de datos | `photo-technology.png`, imagen generada |
| 06 | Ondas y refracciones ópticas | `photo-waves.png`, imagen generada |
| 07 | Tierra desde el espacio | `photo-space-source.jpg`, fotografía real Apollo 17 / NASA; original de 4.579 × 4.579 px, versión servida de 3.200 × 3.200 px |
| 08 | Raíces: olivo mediterráneo | `original-olive.png`, copia exacta e intacta de [la imagen original de Tahona](https://tahona.ai/images/fondo_olivo_singemini.png), 1.368 × 768 px |

Los archivos se conservan en `public/images/corporate/`. Las cinco imágenes generadas tienen 1.672 × 941 px nativos, sin dither ni ampliación artificial; son ilustrativas y no representan instalaciones de Tahona. La página sirve WebP con calidad 95 y variantes responsive de 960 px mediante `srcset`. El original del olivo sigue intacto; su versión WebP también usa calidad 95.

Los créditos de krzhck / Unsplash y NASA / Apollo 17 aparecen en el pie y en la leyenda correspondiente de escritorio. Las fuentes, permisos y originales están documentados en [CORPORATE-PHOTO-SOURCES.md](CORPORATE-PHOTO-SOURCES.md); los prompts y la procedencia de las imágenes generadas, en [CORPORATE-GENERATED-PHOTOS.md](CORPORATE-GENERATED-PHOTOS.md).

La antigua `architecture.jpg` y las tres imágenes generadas con dither de la versión 2 se conservan como recursos anteriores. No forman parte de las ocho imágenes activas.

El carrusel propio mantiene el mensaje y las acciones estables. Cambia de imagen cada 9 segundos, con una disolución de 1,2 segundos y un zoom muy leve de 12 segundos. Incluye únicamente ocho líneas de progreso seleccionables; se han retirado el contador, el nombre de escena, las flechas y el control de reproducción. La pausa detiene el tiempo restante, el progreso y el movimiento visual; también se interrumpe al interactuar y cuando la pestaña deja de estar visible.

Cada imagen tiene un encuadre específico para móvil. La Tierra se muestra completa con `contain`, sobre negro y hacia la derecha, dejando espacio para el titular. Se carga primero la portada y se prepara la siguiente imagen; las demás se descargan al avanzar, para reducir el peso inicial.

En móvil también avanza automáticamente. Con `prefers-reduced-motion`, la portada permanece quieta y las imágenes se pueden elegir manualmente. El resto de la página usa entradas discretas, revelado al desplazarse y transiciones entre industrias.

## Funcionamiento local

- Menús, navegación por anclas, capacidades y método desplegables, industrias con navegación de teclado.
- Casos y perspectivas en diálogos con cierre, Escape y retorno del foco.
- Formulario con validación, bloqueo de envíos duplicados y estados de envío, éxito y error traducidos. Utiliza el mismo webhook de producción y las claves `name`, `email`, `details`; la organización se incluye en `details`. El formulario de producción usa `no-cors`, por lo que no se puede verificar desde el navegador la entrega final del correo. No se ha enviado una solicitud real durante las comprobaciones.
- Fuentes, imágenes y logo locales; sin dependencias nuevas.
- Metadatos `index, follow`, canonical y hreflang absolutos para las tres rutas; tarjetas sociales.

La portada original del checkout se conserva en `tmp/corporate/index.original.astro.txt`. Los componentes anteriores y sus modificaciones preexistentes se mantienen.

## Abrir y comprobar

```sh
bun dev --host 127.0.0.1
# http://127.0.0.1:4321/
# http://127.0.0.1:4321/en/
# http://127.0.0.1:4321/zh/

bun run build
bun run astro check
```

La compilación solo genera `dist/`; no publica. En la primera versión se reparó la instalación de paquetes nativos con las mismas versiones, sin añadir dependencias ni modificar el manifiesto.

## Estado de validación

- Estructura de los ocho textos de portada y auditoría de procesos validada en español, inglés y chino.
- Los registros de fuentes distinguen las cinco imágenes generadas, las dos fotografías reales y el olivo original.
- Compilación estática de las tres rutas completada. Astro: cero errores y warnings; cuatro hints preexistentes en componentes antiguos.
- La versión 2 tenía las tres rutas compiladas y Astro sin errores ni warnings, con cuatro hints preexistentes. También se habían comprobado el cambio de idioma con ancla, los controles del carrusel, la pausa, los diálogos y el formulario chino.
- Navegador v3: las ocho fotografías decodifican correctamente, con una única selección activa; la imagen original ocupa el puesto 8 y el siguiente control vuelve a arquitectura. Contador y ocho indicadores correctos. Carga progresiva comprobada: los fondos restantes se solicitan al necesitarlos.
- Las tres versiones muestran ocho imágenes y el nuevo texto de auditoría en capacidades y método. Revisadas a 320 px, móvil de 390 px, tableta de 768 px y escritorio de 1440 px sin desbordamiento horizontal. Encuadres específicos de arquitectura, ciudad y Tierra revisados visualmente.
- Consola de la nueva página sin errores ni avisos. Los casos y el formulario mantienen el comportamiento local comprobado anteriormente; no se han modificado en esta revisión.
- Capturas v3 en `output/corporate/es-v3.jpg` y `output/corporate/mobile-v3.jpg`. Las capturas anteriores se conservan.

### Ajuste del orden de portada

La imagen de ondas pasa a la posición 01. La posición 06 recupera la fotografía original del edificio de la primera versión de esta rama (`architecture.jpg`), con variantes WebP sin alterar el original. Se mantienen ocho imágenes y el olivo original en la posición 08. Orden: ondas, logística, Shanghái, naturaleza, tecnología, edificio original, espacio y olivo. Etiquetas sincronizadas en español, inglés y chino.

### Ajustes de navegación y cierre visual

El cambio de idioma conserva las coordenadas exactas de scroll mediante un dato temporal de sesión que se consume al abrir la traducción, sin reutilizar el hash de la última sección visitada. Seleccionar el idioma activo cierra el selector sin recargar.

La portada ocupa la altura visible menos la cabecera, con controles al pie y altura flexible cuando el contenido requiere más espacio en pantallas pequeñas. Se elimina la franja de tres mensajes posterior, aumenta AI a 13px y el footer pasa a gris oscuro #242627, con logo blanco y textos/enlaces de contraste claro.

Verificado: cambios ES → EN → ZH → ES conservan el scroll (incluidos 2081px de lectura); la portada termina exactamente en el borde a 1366×768, 1440×810, 1920×1080 y 390×844. Sin desbordamiento horizontal. Construcción estática y diagnóstico Astro correctos (solo cuatro hints preexistentes). Todo permanece en local.

### Mesh Flow sobre la portada

Una malla local de puntos y curvas responde al cursor mediante un campo gaussiano de atracción suave. Se dibuja únicamente en un canvas de 528px alrededor del puntero, con resolución limitada a 1.5×, sin shaders ni dependencias nuevas. La fotografía, los textos y los controles permanecen estables. La malla es completamente transparente en reposo, se atenúa sobre enlaces/botones y desaparece al salir. El bucle se detiene cuando el cursor se estabiliza, al quedar fuera de pantalla o al ocultar la pestaña. Desactivada en móvil, puntero táctil y movimiento reducido. Componente compartido por español, inglés y chino.

### Gravedad sobre las imágenes

La fotografía también responde a la malla con una deformación local suave-media, inspirada en referencias públicas de Codrops. El desplazamiento utiliza WebGL nativo sobre un área pequeña, comparte un único bucle con la malla y mantiene intacto el archivo original. Sin dependencias nuevas ni cambios en el copy, las rutas o el despliegue. Activo en los tres idiomas, con fallback a la fotografía limpia y la malla 2D cuando WebGL no está disponible.

### Fluidez en el titular

El titular principal responde al paso del cursor con un mapa de velocidad localizado, inspirado en la demo 3 de Flowmap Deformation. Las letras se arrastran suavemente y recuperan su forma al detener el puntero. Se filtra el HTML real: no se sustituye por una imagen, se conservan tipografía, colores, selección y accesibilidad. Comparte el bucle de Mesh Flow; el filtro desaparece al disiparse el movimiento. Verificado en español, inglés y chino y desactivado en móvil. Construcción correcta y Astro sin errores ni advertencias (cuatro hints preexistentes).

### Preparación para producción — 7 de octubre

Se retiran los textos de simulación en los tres idiomas y el diálogo de revisión local. La integración de contacto se contrasta con `origin/main`: `https://n8n.tahona.ai/webhook/tahona-form`, POST URL-encoded y `no-cors`. El cambio manual de fotografía reinicia los nueve segundos; la reproducción se pausa sobre los indicadores, con foco de teclado, al ocultar la pestaña o al salir de pantalla. Se respeta movimiento reducido.

El push a `codex/pruebas-locales` no publica: el workflow del checkout solo escucha `main`, y el actual de `origin/main` escucha etiquetas `v*`. No se modifica ningún workflow ni se crean etiquetas.

Validación de esta preparación: compilación estática de las tres rutas correcta; Astro con cero errores y warnings, cuatro hints preexistentes. Formulario comprobado con envío simulado (payload, Unicode, validación, envíos duplicados y errores). Navegador: ocho líneas, selección manual seguida de avance automático, textos ES/EN/ZH y encaje exacto a 1366×768.
