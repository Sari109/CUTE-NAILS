# Cute Nails

Sitio web creado para Cute Nails, un negocio que ofrece servicios de manicure y pedicure a domicilio en Sahagún, Córdoba. Este proyecto se realizó como trabajo final de la asignatura Desarrollo Web I de la Universidad de Córdoba. Para su desarrollo se utilizaron Vue 3, Vite y Vue Router.

**Autora:** Sara María Cárdenas Marzola

**Sitio web:** https://cute-nails-olive.vercel.app

## Descripción

La página web permite que los clientes conozcan los servicios que ofrece el negocio, consulten las diferentes técnicas de uñas, comparen precios y duración, vean algunos trabajos realizados y puedan dejar sus opiniones o ponerse en contacto para solicitar una cita.

El sitio cuenta con las siguientes secciones:

- **Inicio:** presenta el negocio, algunos de los servicios más destacados, cómo funciona la atención a domicilio, una galería de trabajos y preguntas frecuentes.
- **Catálogo:** muestra las diferentes técnicas disponibles e incluye un buscador y una tabla con los precios y la duración de cada servicio.
- **Detalle de técnica:** ofrece información más completa sobre cada técnica, incluyendo su descripción, precio, duración y algunas recomendaciones.
- **Portafolio:** permite ver fotografías de trabajos realizados, incluyendo imágenes del antes y después de los servicios de manicure y pedicure.
- **Reseñas:** cuenta con un formulario para que las clientas puedan compartir sus opiniones y consultar los comentarios publicados.
- **Sobre nosotros:** presenta información general sobre el negocio.
- **Contacto:** incluye un formulario de contacto, enlaces a WhatsApp e Instagram, horarios de atención y preguntas frecuentes.

## Tecnologías utilizadas

Para realizar el proyecto se utilizaron las siguientes herramientas:

- Vue 3 para desarrollar las diferentes partes de la página.
- Vite para crear y ejecutar el proyecto.
- Vue Router para pasar de una sección a otra sin tener que recargar la página.
- HTML5 y CSS3 para organizar y dar estilo al contenido.
- JavaScript para agregar funciones e interacciones.
- localStorage para guardar las reseñas en el navegador.
- Fetch y async/await para trabajar con solicitudes de información.
- Font Awesome y Google Fonts para utilizar iconos y diferentes tipos de letra.
- Vercel para publicar la página web.

## Estructura de carpetas

El proyecto está organizado en diferentes carpetas para mantener los archivos ordenados y facilitar su modificación.

```text
CUTE-NAILS/
├── public/
│   └── img/             Imágenes utilizadas en el sitio
├── src/
│   ├── assets/
│   │   └── styles.css   Estilos de la página
│   ├── components/      Componentes como el menú y el pie de página
│   ├── Vistas/          Secciones principales del sitio
│   ├── router/
│   │   └── index.js     Configuración de las rutas
│   ├── App.vue          Componente principal
│   └── main.js          Archivo principal del proyecto
├── index.html
├── package.json
└── vite.config.js
```

## Funcionamiento del sitio

El sitio está organizado de la siguiente manera:

- **Componentes:** el menú de navegación y el pie de página se crean una sola vez y se utilizan en las diferentes secciones de la página.
- **Navegación:** cada sección tiene su propia ruta, lo que permite cambiar de una página a otra sin necesidad de recargar todo el sitio. En el caso de las técnicas, se utiliza una misma ruta que muestra la información según la opción seleccionada.
- **Formularios:** cuentan con validaciones para comprobar que los datos ingresados sean correctos y mostrar mensajes cuando hay algún error.
- **Guardado de reseñas:** los comentarios se almacenan en el navegador mediante localStorage, por lo que permanecen guardados incluso después de cerrar o actualizar la página.

## Instalación y ejecución del proyecto

Para ejecutar el proyecto en un computador es necesario tener instalado Node.js.

1. Descargar o clonar el repositorio.
2. Abrir una terminal dentro de la carpeta del proyecto.
3. Escribir el siguiente comando para instalar los archivos necesarios:

```bash
npm install
```

4. Una vez terminada la instalación, iniciar el proyecto con:

```bash
npm run dev
```

5. Abrir en el navegador la dirección que aparece en la terminal. Generalmente es `http://localhost:5173`.

Si se desea generar la versión final del proyecto, se debe ejecutar:

```bash
npm run build
```

Los archivos listos para publicar se guardan en la carpeta `dist`.

## Publicación del sitio

El sitio web se encuentra publicado en Vercel y está conectado al repositorio del proyecto. Esto permite que, cada vez que se realizan y suben cambios a la rama principal (`main`), la página se actualice automáticamente.

**Enlace del sitio web:** https://cute-nails-olive.vercel.app