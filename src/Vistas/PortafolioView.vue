<script setup>
// Vista de Portafolio con fotos reales de manicura, pedicura y diseños
</script>

<template>
  <main>
    <header class="banner banner-pagina banner-portafolio">
      <div class="banner-texto">
        <h1>Portafolio</h1>
        <p>Trabajos</p>
      </div>
    </header>

    <!-- Manicure antes y después -->
    <section class="seccion-trabajos" aria-labelledby="titulo-manicure">
      <h2 id="titulo-manicure">Manicure</h2>
      <div class="trabajos">
        <article class="trabajo">
          <figure>
            <img src="/img/antes1.jpg" alt="Manos antes del servicio, manicure 1" loading="lazy" />
            <figcaption>Antes</figcaption>
          </figure>
          <figure>
            <img src="/img/despues1.jpg" alt="Manos después del servicio, manicure 1" loading="lazy" />
            <figcaption>Después</figcaption>
          </figure>
        </article>

        <article class="trabajo">
          <figure>
            <img src="/img/antes3.jpg" alt="Manos antes del servicio, manicure 2" loading="lazy" />
            <figcaption>Antes</figcaption>
          </figure>
          <figure>
            <img src="/img/despues3.jpg" alt="Manos después del servicio, manicure 2" loading="lazy" />
            <figcaption>Después</figcaption>
          </figure>
        </article>

        <article class="trabajo">
          <figure>
            <img src="/img/antes4.jpg" alt="Manos antes del servicio, manicure 3" loading="lazy" />
            <figcaption>Antes</figcaption>
          </figure>
          <figure>
            <img src="/img/despues4.jpg" alt="Manos después del servicio, manicure 3" loading="lazy" />
            <figcaption>Después</figcaption>
          </figure>
        </article>

        <article class="trabajo">
          <figure>
            <img src="/img/antes5.png" alt="Manos antes del servicio, manicure 4" loading="lazy" />
            <figcaption>Antes</figcaption>
          </figure>
          <figure>
            <img src="/img/despues5.png" alt="Manos después del servicio, manicure 4" loading="lazy" />
            <figcaption>Después</figcaption>
          </figure>
        </article>

        <article class="trabajo">
          <figure>
            <img src="/img/antes6.png" alt="Manos antes del servicio, manicure 5" loading="lazy" />
            <figcaption>Antes</figcaption>
          </figure>
          <figure>
            <img src="/img/despues6.png" alt="Manos después del servicio, manicure 5" loading="lazy" />
            <figcaption>Después</figcaption>
          </figure>
        </article>

        <article class="trabajo">
          <figure>
            <img src="/img/antes7.png" alt="Manos antes del servicio, manicure 6" loading="lazy" />
            <figcaption>Antes</figcaption>
          </figure>
          <figure>
            <img src="/img/despues7.png" alt="Manos después del servicio, manicure 6" loading="lazy" />
            <figcaption>Después</figcaption>
          </figure>
        </article>
      </div>
    </section>

    <!-- Pedicure antes y después -->
    <section class="seccion-trabajos" aria-labelledby="titulo-pedicure">
      <h2 id="titulo-pedicure">Pedicure</h2>
      <div class="trabajos">
        <article class="trabajo">
          <figure>
            <img src="/img/antes2.jpg" alt="Pies antes del servicio, pedicure 1" loading="lazy" />
            <figcaption>Antes</figcaption>
          </figure>
          <figure>
            <img src="/img/despues2.jpg" alt="Pies después del servicio, pedicure 1" loading="lazy" />
            <figcaption>Después</figcaption>
          </figure>
        </article>

        <article class="trabajo">
          <figure>
            <img src="/img/antes8.png" alt="Pies antes del servicio, pedicure 2" loading="lazy" />
            <figcaption>Antes</figcaption>
          </figure>
          <figure>
            <img src="/img/despues8.png" alt="Pies después del servicio, pedicure 2" loading="lazy" />
            <figcaption>Después</figcaption>
          </figure>
        </article>
      </div>
    </section>

    <!-- Diseños y Técnicas -->
    <section class="seccion-trabajos seccion-disenos" aria-labelledby="titulo-disenos">
      <div class="encabezado-con-enlace">
        <div>
          <h2 id="titulo-disenos">Diseños y Técnicas</h2>
          <p class="disenos-subtitulo">Inspiración de estilos realizados con nuestras técnicas más pedidas</p>
        </div>
      </div>

      <!-- Grupo 1: Base Rubber -->
      <div class="grupo-tecnica">
        <div class="tecnica-cabecera">
          <h3><i class="fa-solid fa-gem" aria-hidden="true"></i> Base Rubber</h3>
          <RouterLink class="enlace-tecnica" to="/detalle/base-rubber">
            Ver detalle técnica <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </RouterLink>
        </div>
        <div class="galeria-disenos">
          <figure class="tarjeta-diseno">
            <img src="/img/base-rubber2.jpg" alt="Diseño con Base Rubber acabado natural y brillante" loading="lazy" />
            <figcaption>Base Rubber · Estilo natural</figcaption>
          </figure>
          <figure class="tarjeta-diseno">
            <img src="/img/base-rubber3.jpg" alt="Diseño con Base Rubber en tono nude elegante" loading="lazy" />
            <figcaption>Base Rubber · Tono nude</figcaption>
          </figure>
          <figure class="tarjeta-diseno">
            <img src="/img/base-rubber4.jpg" alt="Diseño con Base Rubber y acabado reforzado" loading="lazy" />
            <figcaption>Base Rubber · Brillo y refuerzo</figcaption>
          </figure>
        </div>
      </div>

      <!-- Grupo 2: Press on -->
      <div class="grupo-tecnica">
        <div class="tecnica-cabecera">
          <h3><i class="fa-solid fa-gem" aria-hidden="true"></i> Press on</h3>
          <RouterLink class="enlace-tecnica" to="/detalle/press-on">
            Ver detalle técnica <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </RouterLink>
        </div>
        <div class="galeria-disenos">
          <figure class="tarjeta-diseno">
            <img src="/img/press-on2.jpg" alt="Diseño Press on personalizado con decoración" loading="lazy" />
            <figcaption>Press on · Diseño personalizado</figcaption>
          </figure>
          <figure class="tarjeta-diseno">
            <img src="/img/press-on3.jpg" alt="Diseño Press on con acabado delicado" loading="lazy" />
            <figcaption>Press on · Acabado delicado</figcaption>
          </figure>
          <figure class="tarjeta-diseno">
            <img src="/img/press-on4.jpg" alt="Diseño Press on con estilo moderno y elegante" loading="lazy" />
            <figcaption>Press on · Elegancia moderna</figcaption>
          </figure>
        </div>
      </div>

      <!-- Grupo 3: Acrílicas tips -->
      <div class="grupo-tecnica">
        <div class="tecnica-cabecera">
          <h3><i class="fa-solid fa-gem" aria-hidden="true"></i> Acrílicas tips</h3>
          <RouterLink class="enlace-tecnica" to="/detalle/acrilicas-tips">
            Ver detalle técnica <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </RouterLink>
        </div>
        <div class="galeria-disenos">
          <figure class="tarjeta-diseno">
            <img src="/img/acrilicas-tips2.jpg" alt="Uñas Acrílicas con tips acabado impecable" loading="lazy" />
            <figcaption>Acrílicas tips · Estructura perfecta</figcaption>
          </figure>
          <figure class="tarjeta-diseno">
            <img src="/img/acrilicas-tips3.jpg" alt="Uñas Acrílicas con tips y diseño estilizado" loading="lazy" />
            <figcaption>Acrílicas tips · Diseño estilizado</figcaption>
          </figure>
          <figure class="tarjeta-diseno">
            <img src="/img/acrilicas-tips4.jpg" alt="Uñas Acrílicas con tips y acabado duradero" loading="lazy" />
            <figcaption>Acrílicas tips · Acabado duradero</figcaption>
          </figure>
        </div>
      </div>
    </section>
  </main>
</template>
