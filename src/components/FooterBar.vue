<script setup>
function subirArriba() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="pie">
    <div class="pie-contenido">
      <section class="pie-marca">
        <h2>Cute Nails</h2>
        <p>Cuidamos tus uñas desde la comodidad de tu casa.</p>
      </section>

      <nav aria-label="Técnicas destacadas">
        <h2>Técnicas</h2>
        <ul>
          <li><RouterLink to="/detalle/press-on">Press on</RouterLink></li>
          <li><RouterLink to="/detalle/base-rubber">Base Rubber</RouterLink></li>
          <li><RouterLink to="/detalle/acrilicas-tips">Acrílicas tips</RouterLink></li>
          <li><RouterLink to="/detalle/semipermanente">Semipermanente</RouterLink></li>
        </ul>
      </nav>

      <section>
        <h2>Contacto</h2>
        <ul>
          <li><a href="https://wa.me/573147051152" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> 314 705 1152</a></li>
          <li><a href="https://instagram.com/cutenails_0121" target="_blank" rel="noopener"><i class="fa-brands fa-instagram" aria-hidden="true"></i> cutenails_0121</a></li>
          <li><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Sahagún, Córdoba · Lunes a sábado</li>
        </ul>
      </section>
    </div>

    <p class="derechos">© 2026 Cute Nails. Todos los derechos reservados.</p>
  </footer>

  <div class="flotantes">
    <a class="flotante flotante-subir" href="#top" aria-label="Volver arriba" @click.prevent="subirArriba">
      <i class="fa-solid fa-angles-up" aria-hidden="true"></i>
    </a>
    <a class="flotante flotante-whatsapp" href="https://wa.me/573147051152" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
      <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
    </a>
  </div>
</template>
