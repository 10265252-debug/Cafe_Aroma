# Café Aroma 
Sitio web adaptable para una cafetería, creado con HTML, CSS, Bootstrap 5 y JavaScript/jQuery.

## Archivos
- `index.html`: estructura y contenido de la página.
- `styles.css`: diseño cálido y adaptable a celular.
- `main.js`: idioma ES/EN, modo claro/oscuro, filtros del menú, carrito y controles.
- `img/`: carpeta para fotos locales opcionales.

## Cómo abrir
1. Descomprime la carpeta.
2. Abre `index.html` con Visual Studio Code.
3. Usa la extensión Live Server para verlo en el navegador.

## Importante sobre las imágenes
El diseño usa fotografías reales de Unsplash por URL para mantener el proyecto ligero. Necesitas conexión a internet para que se carguen. Si prefieres guardarlas localmente, descarga fotos propias o con licencia adecuada en `img/` y cambia las rutas de `src` en `index.html`.

## Música
La música se intenta reproducir únicamente después de pulsar el botón, porque los navegadores bloquean el audio automático. Si el enlace deja de funcionar, cambia la URL en `main.js` por un archivo de audio propio con permiso de uso.

## Formularios y pedidos
El carrito prepara un mensaje para WhatsApp, pero debes reemplazar `https://wa.me/` por el número real del negocio en formato internacional. El formulario de contacto es una demostración y todavía no envía datos a un servidor.

## Personalización
Edita dirección, horario, precios, promociones, redes sociales y enlaces antes de publicar. Para Vercel, sube la carpeta a GitHub e importa el repositorio en Vercel.
