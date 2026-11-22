<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { servicios, obtenerServicioPorId } from '../almacen/estado.js'
import TarjetaServicio from '../components/TarjetaServicio.vue'

const ruta = useRoute()

// Técnica actual obtenida del id en la URL
const servicioActual = computed(() => {
  const id = ruta.params.id || 'press-on'
  return obtenerServicioPorId(id)
})

// Técnicas recomendadas diferentes a la actual
const tecnicasRelacionadas = computed(() => {
  return servicios.value
    .filter((s) => s.id !== servicioActual.value.id)
    .slice(0, 3)
})

// Texto codificado para WhatsApp
const mensajeWhatsApp = computed(() => {
  return encodeURIComponent(`Hola, quiero agendar una cita para ${servicioActual.value.nombre}`)
})
</script>

<template>
  <main>
    <!-- Migas de pan para navegación amigable -->
    <nav class="migas" aria-label="Ruta de navegación">
      <RouterLink to="/catalogo">Catálogo</RouterLink>
      <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
      <span aria-current="page">{{ servicioActual.nombre }}</span>
    </nav>

    <!-- Contenedor del detalle de la técnica -->
    <div id="contenedor-detalle">
      <article class="detalle">
        <img
          class="detalle-foto"
          :src="servicioActual.imagen"
          :alt="servicioActual.alt || servicioActual.nombre"
        />

        <div class="detalle-info">
          <h1>{{ servicioActual.nombre }}</h1>
          <p class="detalle-precio">{{ servicioActual.precio }}</p>
          <p class="detalle-descripcion">{{ servicioActual.descripcion }}</p>

          <ul class="etiquetas">
            <li>
              <i class="fa-regular fa-clock" aria-hidden="true"></i> {{ servicioActual.duracion }}
            </li>
            <li>
              <i class="fa-solid fa-house" aria-hidden="true"></i> A domicilio
            </li>
          </ul>

          <section class="recomendaciones" aria-labelledby="titulo-recomendaciones">
            <h2 id="titulo-recomendaciones">Recomendaciones</h2>
            <ul>
              <li v-for="(rec, index) in servicioActual.recomendaciones" :key="index">
                {{ rec }}
              </li>
            </ul>
          </section>

          <p class="nota-agendar">
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
            Vamos a tu casa en Sahagún, Córdoba. Atendemos de lunes a sábado.
          </p>

          <a
            class="boton boton-grande"
            :href="'https://wa.me/573147051152?text=' + mensajeWhatsApp"
            target="_blank"
            rel="noopener"
          >
            <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Agendar {{ servicioActual.nombre }} por WhatsApp
          </a>
        </div>
      </article>

      <!-- Técnicas relacionadas -->
      <section class="tecnicas seccion" aria-labelledby="titulo-relacionadas">
        <div class="tecnicas-encabezado">
          <h2 id="titulo-relacionadas">También te podría interesar</h2>
        </div>
        <div class="tarjetas">
          <TarjetaServicio
            v-for="servicio in tecnicasRelacionadas"
            :key="servicio.id"
            :servicio="servicio"
          />
        </div>
      </section>
    </div>
  </main>
</template>
