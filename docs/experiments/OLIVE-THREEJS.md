# Tahona · olivo vivo

Versión desarrollada en `intento-carlos-threejs`, a partir de la versión publicada `a4239ab` (`v2026.10.09-landing`).

## Dirección

Una estampa mediterránea con relieve: movimiento automático de cámara, respuesta amortiguada al cursor y brisa localizada en la copa. La fotografía original, su paleta y su dither son la textura exacta del plano. No se regenera la imagen ni se añade ruido aleatorio al grano.

La profundidad se interpreta mediante una superficie 2.5D: terreno, copa y tronco tienen alturas distintas, suavizadas a escala amplia. No representa una reconstrucción volumétrica del árbol ni descubre geometría oculta detrás de sus ramas. La amplitud de cámara está acotada por ese límite.

## Referencias y adaptación propia

- [Maxime Heckel — The Art of Dithering and Retro Shading for the Web](https://blog.maximeheckel.com/posts/the-art-of-dithering-and-retro-shading-web/): coherencia de paleta y estabilidad del patrón. Se conserva el dither original sin un segundo filtro temporal.
- [Mario Carrillo — Create a Wave Motion Effect on an Image with Three.js](https://tympanus.net/codrops/2020/03/17/create-a-wave-motion-effect-on-an-image-with-three-js/): plano subdividido con movimiento orgánico. Aquí se limita a la copa y se ancla el tronco; no se deforma el paisaje completo como una tela.
- [Dominik Fojcik — Relighting Images with Depth Maps and Three.js](https://tympanus.net/codrops/2026/08/19/relighting-images-with-depth-maps-and-three-js/): profundidad aparente de una imagen. Se adopta el relieve, manteniendo intacta la iluminación impresa en la fotografía.

El shader y los campos de relieve son propios. No se han copiado imágenes ni código de estas referencias.

## Integración

- Three.js se carga de forma diferida después de que la imagen HTML esté decodificada.
- Canvas decorativo bajo los lavados existentes. Imagen HTML accesible como respaldo si WebGL falla.
- Cámara ortográfica con periodos lentos superpuestos y seguimiento del cursor con amortiguación temporal.
- Una geometría, una textura y un material. Sin composer ni efectos de desenfoque.
- Brisa formada por oscilaciones de distinta frecuencia, limitada a la copa y modulada por ráfagas lentas.
- Resolución limitada por densidad de pantalla y presupuesto de píxeles; móvil a 30 fps con menor amplitud.
- Pausa al salir del área visible, ocultar pestaña o activar movimiento reducido. Botón discreto para pausar/reanudar.
- Limpieza de recursos y eventos en las transiciones de Astro.

## Validación

Comprobación Astro: cero errores, advertencias o sugerencias. Compilación estática completada: 13 páginas.

Comprobación geométrica de cobertura: 4.050 configuraciones en 14 tamaños de pantalla, de 320 × 568 a 3440 × 1440, con los extremos de cámara, cursor y brisa. Cero fallos; se conserva un margen adicional del 1% por borde. Esta comprobación matemática no sustituye una revisión visual.

El visor integrado rechazó abrir localhost durante esta sesión; la revisión visual final debe hacerse directamente en el servidor local. La publicación se realiza desde esta rama mediante el workflow existente de GitHub Pages, sin fusionar con `main`.

## Deformación de la portada al pasar el cursor

`hero-flow.ts` adapta el efecto de `version-carlos-corporativa:src/components/corporate/title-flow.ts`. Se aplica por separado a la frase superior, titular, descripción, la frase del ADN y el control de pausa. Los dos CTA conservan su comportamiento original, sin deformación. La navbar queda fuera de la selección. La intensidad original se mantiene en el titular y se reduce en los elementos pequeños.

Los filtros SVG trabajan sobre el DOM real: texto, enlaces y botones conservan su semántica y sus destinos. Un único bucle bajo demanda actualiza las pequeñas texturas de desplazamiento; se detiene al disiparse la estela, ocultarse la pestaña o salir la portada de pantalla. Se desactiva con movimiento reducido y en dispositivos sin cursor preciso. El foco de teclado queda sin deformación. Los filtros y observadores se eliminan al cambiar de página.

Validación adicional: compilación estática y 14 comprobaciones en un entorno DOM simulado sobre el módulo real (activación, disipación, foco, preferencias, clics y limpieza). Se verificó el HTML generado: cinco superficies dentro de la portada, navbar y CTA excluidos del filtro, y destinos de ambos CTA conservados. La prueba simulada no comprueba el dibujo del filtro en un navegador. Servidor local en `http://127.0.0.1:4323/`.

## Rejilla dither y lupa suave

`dither-mesh.ts` adapta el campo gaussiano de la rejilla corporativa. Sustituye sus líneas continuas por muestras de tinta y cruces pequeñas, con una matriz Bayer fija anclada al paisaje. Solo se pinta una zona de 528 × 528 alrededor del cursor, con resolución limitada y sin repintados cuando se estabiliza. Usa el mismo reloj y ciclo de vida que la escena del olivo.

La lupa se integra en el material existente de Three.js: desplaza las coordenadas de la fotografía animada usando derivadas en pantalla. Conserva el tirón gaussiano corporativo, reduciendo su coeficiente de 0,42 a 0,10 (desplazamiento máximo aproximado de 24,46 a 5,82 píxeles CSS). No superpone una copia estática de la foto. La rejilla y la lupa se retiran al pasar sobre enlaces o botones, pausar el paisaje, activar movimiento reducido u ocultar la portada.

Comprobación aislada del módulo de rejilla: coordenadas, dibujo, límite de resolución, detención del repintado en reposo, exclusión de controles, disipación, reinicio y eliminación del canvas. Compilación estática correcta. La validación visual de WebGL sigue pendiente en el navegador del usuario.

## ADN

El ADN aparece como «Cercanía. Agilidad. Confianza.» en verde oscuro, con Courier New/Courier de peso regular, espaciado abierto y separación respecto a los CTA. Es texto, sin etiquetas, y conserva el hover de la portada.

La sección de cifras conserva el ancho original del texto y los cuatro hovers verdes suaves. Se ha retirado por completo el molino decorativo, junto con su componente, animación y observadores.
