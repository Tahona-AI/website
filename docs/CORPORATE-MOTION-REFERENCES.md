# Referencias para la portada internacional

Revisión de las páginas públicas oficiales realizada el 5 de octubre de 2026. Investigación para la prueba local; sin publicación, merge ni escrituras remotas.

## Evidencia observada

- **NTT DATA:** su portada usa un carrusel de una imagen a la vez con navegación anterior/siguiente, paginación y un control para detener o reanudar. Su configuración pública fija 5 segundos de permanencia y acompaña la imagen con una barra de progreso de la misma duración. El código detiene la reproducción automática por debajo de 768 px. Fuentes: [portada oficial](https://www.nttdata.com/global/en/) y [configuración pública del carrusel](https://www.nttdata.com/global/en/-/media/assets/js/common.js?rev=01e8eee9d02a48659d6a2949b93559f7).
- **Globant:** la portada contiene tres historias con fotografía a sangre, versiones diferentes para escritorio y móvil, y botones numerados. En los ajustes públicos, el carrusel tiene 8 segundos de permanencia, pausa al situar el cursor sobre él y reproducción automática habilitada en escritorio; móvil y tableta conservan navegación por puntos sin reproducción automática. Fuente: [portada oficial](https://www.globant.com/), inspección de su HTML y `drupalSettings.blockSlider`. No se deduce de este HTML una curva visual exacta de transición.
- **Capgemini:** su portada trata la imagen como ambiente de marca y ofrece un control explícito de reproducción/pausa para el vídeo. En el archivo público de su bloque de portada aparecen entradas por opacidad y desplazamiento de 50 px con 0,5 segundos y curva `power2.out`. Fuentes: [portada oficial](https://www.capgemini.com/es-es/) y [script del bloque de portada](https://www.capgemini.com/es-es/wp-content/plugins/capgemini-blocks/build/cg-block-hero-bleed-banner/frontend.js?ver=fe4e580e30be48c459e5).

## Propuesta propia para Tahona

Las siguientes decisiones son una interpretación de las referencias, no una descripción de sus efectos visuales:

- Mantener el titular y las acciones estables mientras cambia el paisaje para que el mensaje se pueda leer sin interrupciones.
- Dar a cada imagen 9 segundos, con una transición por opacidad de 1,2 segundos y un movimiento de escala muy contenido (2,5 % en 12 segundos). El carácter dither sigue siendo perceptible, sin desenfoque añadido.
- Usar indicadores discretos con progreso, flechas y una pausa accesible. La pausa congela imagen, progreso y temporizador; reproducir de forma explícita tiene prioridad sobre el foco del propio control. Detener el movimiento con interacción, cuando la portada o la pestaña deja de estar visible y si el usuario solicita menos movimiento. En móvil comienza pausado.
- Alternar arquitectura moderna con paisajes tranquilos. La secuencia refuerza capacidad tecnológica y cercanía sin añadir más frases al titular.

## Imagen original del olivo

La portada pública actual de Tahona referencia la imagen con el texto alternativo «Paisaje mediterráneo con un olivo».

- Fuente exacta: [imagen original](https://tahona.ai/images/fondo_olivo_singemini.png).
- Copia local sin edición: `public/images/corporate/original-olive.png`.
- Formato y dimensiones: PNG de 1.368 × 768 px.
- SHA-256: `d7730c92b57cd14b15bfcd4bb86c750e9a4442ab9159d74a0da1f1cbf17e57d6`.
- Inspección visual: un olivo de gran tamaño a la derecha, colinas mediterráneas y cielo azul; el tramado de puntos forma parte del propio archivo. No es la imagen de bosque `hero-clearing` de la primera prueba corporativa.

Se reutiliza el recurso existente de Tahona a petición del usuario; las imágenes de otras consultoras son referencias de composición y movimiento y no se descargan para integrarlas en el sitio.

## Gravedad localizada sobre la fotografía

Referencias consultadas: [Creating a Bulge Distortion Effect with WebGL](https://tympanus.net/codrops/2023/06/28/creating-a-bulge-distortion-effect-with-webgl/) (Robin Payot / Codrops; documenta una aplicación en Upperquad) y [Mouse Flowmap Deformation with OGL](https://tympanus.net/codrops/2019/09/25/mouse-flowmap-deformation-with-ogl/) (Robin Delaporte / Codrops).

Se adapta el desplazamiento local de textura con una atracción radial gaussiana, sin copiar la interfaz ni añadir librerías. Un canvas WebGL nativo de 528px comparte el campo y la cadencia de Mesh Flow; solo procesa el área del cursor y conserva la imagen original como fondo/fallback. Intensidad máxima aproximada de 24px, radio suavizado de 250px, entrada amortiguada de 130ms y relajación de 260ms. Respeta los encuadres cover/contain, el zoom y la opacidad del carrusel. Texto, botones y colores de marca permanecen estables. Se oculta en móvil y movimiento reducido; si WebGL no está disponible, sigue funcionando la malla 2D.

## Tipografía fluida

Referencia: [Flowmap Deformation, demo 3](https://tympanus.net/Development/FlowmapDeformation/index3.html), Robin Delaporte / Codrops. El movimiento de esta demo acumula velocidad local en un mapa que se disipa después; se adapta ese principio al titular de Tahona.

El titular conserva su HTML, fuente, color, selección y semántica. Una pequeña textura vectorial de 128 columnas alimenta un filtro SVG de desplazamiento, con arrastre localizado de hasta 18px por eje y disipación de 190ms. Se comparte el bucle de Mesh Flow y se elimina el filtro al reposar. Sin nuevas dependencias. Activo en español, inglés y chino; desactivado en móvil, puntero táctil y movimiento reducido.
