<script setup>
// Vista Sobre Nosotros de Cute Nails
</script>

<template>
  <main>
    <header class="banner banner-pagina banner-nosotros">
      <div class="banner-texto">
        <h1>Sobre nosotros</h1>
        <p>Conoce la historia y el corazón de Cute Nails</p>
      </div>
    </header>

    <section class="nosotros-quienes" aria-labelledby="titulo-quienes">
      <div class="nosotros-texto">
        <h2 id="titulo-quienes">¿Quiénes somos?</h2>
        <p>
          Cute Nails es un emprendimiento dedicado al cuidado, diseño y embellecimiento de uñas que opera bajo la
          modalidad a domicilio en Sahagún, Córdoba. Nace con el propósito de ofrecer una experiencia personalizada,
          profesional y relajante, llevando un servicio de alta calidad directamente hasta la comodidad de tu hogar.
        </p>
      </div>
      <div class="nosotros-emblema">
        <span class="emblema-circulo">CN</span>
      </div>
    </section>

    <section class="nosotros-pilares seccion" aria-labelledby="titulo-ofrecemos">
      <h2 id="titulo-ofrecemos" class="titulo-centrado">Te ofrecemos</h2>
      <div class="pilares-grid">
        <article class="pilar-tarjeta">
          <i class="fa-solid fa-house-chimney" aria-hidden="true"></i>
          <h3>A domicilio</h3>
          <p>Disfruta de una atención profesional desde tu casa, ahorrando tiempo sin traslados ni esperas.</p>
        </article>

        <article class="pilar-tarjeta">
          <i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
          <h3>Diseños personalizados</h3>
          <p>Trabajamos cada técnica al detalle, adaptando largos, formas y colores a tu gusto personal.</p>
        </article>

        <article class="pilar-tarjeta">
          <i class="fa-regular fa-clock" aria-hidden="true"></i>
          <h3>Puntualidad y confianza</h3>
          <p>Respetamos tu tiempo y aplicamos normas estrictas de bioseguridad y esterilización en cada cita.</p>
        </article>
      </div>
    </section>

    <section class="nosotros-cta seccion">
      <div class="llamado-caja">
        <h2>¿Quieres consentir tus manos y pies?</h2>
        <p>Manicura y pedicura profesional a domicilio de lunes a sábado en todo Sahagún, Córdoba.</p>
        <RouterLink class="boton boton-grande boton-claro" to="/catalogo">
          <i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Conoce nuestros servicios
        </RouterLink>
      </div>
    </section>
  </main>
</template>
