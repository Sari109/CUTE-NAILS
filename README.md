# Cute Nails – Aplicación Web SPA con Vue.js

**Universidad de Córdoba**  
Facultad de Ingenierías  
Departamento de Ingeniería de Sistemas y Telemática  
Curso: Desarrollo de Aplicación Web Frontend  
Entrega final: Implementación SPA con Vue.js y despliegue en producción


## Descripción del proyecto

Cute Nails es una aplicación web pensada para un emprendimiento de manicura, pedicura y cuidado de uñas a domicilio en el municipio de Sahagún, Córdoba.

En esta entrega final se migró y adaptó el proyecto realizado en los avances anteriores hacia una arquitectura basada en componentes reactivos con Vue.js 3. Con este cambio se logró una navegación rápida entre secciones sin recargar la página, una gestión de datos centralizada con persistencia en el navegador y una estructura mucho más limpia, mantenible y adaptable a cualquier pantalla.

Para el entorno de desarrollo y la compilación a producción se utilizó Vite, permitiendo que la aplicación sea ligera y eficiente.



---

## Estructura del proyecto

```text
CUTE-NAILS/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── img/
│       └── Fotografías y recursos visuales
├── src/
│   ├── assets/
│   │   └── styles.css
│   ├── components/
│   │   ├── NavBar.vue
│   │   ├── FooterBar.vue
│   │   ├── TarjetaServicio.vue
│   │   ├── TarjetaResena.vue
│   │   ├── FormularioResena.vue
│   │   └── TablaComparativa.vue
│   ├── Vistas/
│   │   ├── InicioView.vue
│   │   ├── CatalogoView.vue
│   │   ├── DetalleView.vue
│   │   ├── PortafolioView.vue
│   │   ├── ResenasView.vue
│   │   ├── NosotrosView.vue
│   │   └── ContactoView.vue
│   ├── enrutador/
│   │   └── index.js
│   ├── almacen/
│   │   └── estado.js
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
└── package.json
```

La carpeta `public` contiene las imágenes, iconos y otros recursos estáticos que utiliza la página. En `src` se encuentra todo el código de la aplicación, distribuido en componentes, vistas, estilos, configuración de rutas y el almacén de datos.

Los componentes se crearon para reutilizar elementos visuales clave en varias páginas (como las tarjetas o el formulario), mientras que las vistas corresponden a cada una de las páginas principales del sitio. El archivo `App.vue` reúne el encabezado, el contenido dinámico mediante el enrutador y el pie de página, mientras que `main.js` inicializa la aplicación en el navegador.

---

## Tecnologías utilizadas

- **Vue.js 3:** Para construir la interfaz por medio de componentes de archivo único y gestionar los datos de manera reactiva.
- **Vue Router:** Permite navegar entre todas las secciones de Cute Nails sin necesidad de recargar la página.
- **Vite:** Herramienta utilizada para el servidor de desarrollo local y para generar el paquete final de producción.
- **CSS3:** Hoja de estilos externa con variables, CSS Grid para las áreas principales, Flexbox para la alineación interna y reglas adaptativas para celulares, tabletas y computadores.
- **LocalStorage:** Almacenamiento local del navegador para guardar y consultar las opiniones y calificaciones de los usuarios.
- **Font Awesome:** Librería externa vía CDN para los iconos del menú, redes sociales y detalles de la página.

---

## Instalación y ejecución del proyecto

Para ejecutar Cute Nails de manera local, es necesario contar con Node.js instalado en el computador y abrir una terminal en la carpeta del proyecto.

**1. Instalar las dependencias**
bash
npm install
Descarga e instala las librerías necesarias para el funcionamiento del proyecto.

**2. Iniciar el servidor de desarrollo**
bash
npm run dev

Vite generará un enlace local (por ejemplo `http://localhost:5173/`) que se puede abrir en el navegador para interactuar con la página en tiempo real.

**3. Generar los archivos para producción**
bash
npm run build

Crea la carpeta `dist` con los archivos compilados, comprimidos y listos para subir a cualquier plataforma de alojamiento web.

**4. Probar la versión de producción**
bash
npm run preview

Permite previsualizar localmente el resultado final generado en la carpeta `dist`.

---

## Sobre el desarrollo y cumplimiento de los requerimientos

En esta última entrega, el proyecto se adaptó para trabajar con Vue.js, organizando mejor el código y separando las diferentes páginas y elementos del sitio. Se crearon componentes para reutilizar partes como las tarjetas de servicios, las reseñas y los formularios, evitando tener que repetir el mismo código en varias partes. También se implementó la forma de compartir información entre estos componentes y realizar acciones como agregar o eliminar reseñas.

La navegación entre las diferentes secciones se realizó con Vue Router, permitiendo pasar de una página a otra sin tener que recargar el sitio. Además, se utilizaron las herramientas de Vue para que elementos como el buscador, los formularios y los mensajes se actualizaran según las acciones del usuario.

Las reseñas y los datos de los servicios se organizaron en un archivo central, y las opiniones que agregan los usuarios se guardan en el navegador para que no se pierdan al actualizar la página. También se incluyeron validaciones en los formularios para indicar cuando falta algún dato o se ingresa información incorrecta. Por último, se preparó el proyecto para su publicación, generando una versión optimizada que permite ejecutarlo en un servidor.