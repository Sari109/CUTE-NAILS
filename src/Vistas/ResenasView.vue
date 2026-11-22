<script setup>
import { resenas, totalResenas, promedioCalificacion, agregarResena, eliminarResena } from '../almacen/estado.js'
import TarjetaResena from '../components/TarjetaResena.vue'
import FormularioResena from '../components/FormularioResena.vue'

// Manejo de guardado emitido desde el componente hijo FormularioResena
function guardarNuevaResena(datosResena) {
  agregarResena(datosResena)
}

// Manejo de eliminación emitido desde el componente hijo TarjetaResena
function borrarResena(id) {
  eliminarResena(id)
}
</script>

<template>
  <main>
    <!-- Banner de reseñas -->
    <header class="banner banner-pagina banner-resenas">
      <div class="banner-texto">
        <h1>Reseñas</h1>
        <p>Tu opinión nos ayuda a mejorar</p>
      </div>
    </header>

    <section class="resenas-layout" aria-labelledby="titulo-resena">
      <!-- Columna de introducción e instrucciones -->
      <div class="resenas-intro">
        <h2 id="titulo-resena">Cuéntanos tu experiencia</h2>
        <p>
          Si ya te atendimos, nos encantaría saber cómo te fue. Tu comentario ayuda a otras personas a elegir su técnica con más confianza.
        </p>
        <ul class="resenas-consejos">
          <li><i class="fa-solid fa-circle-check" aria-hidden="true"></i> Dinos qué técnica te hiciste.</li>
          <li><i class="fa-solid fa-circle-check" aria-hidden="true"></i> Califica tu experiencia de 1 a 5.</li>
          <li><i class="fa-solid fa-circle-check" aria-hidden="true"></i> Cuéntanos qué te gustó y qué podemos mejorar.</li>
        </ul>
      </div>

      <!-- Componente reactivo del formulario -->
      <FormularioResena @guardar="guardarNuevaResena" />
    </section>

    <!-- Lista de opiniones y estadísticas -->
    <section class="opiniones seccion" aria-labelledby="titulo-opiniones">
      <h2 id="titulo-opiniones" class="titulo-centrado">Opiniones de nuestras clientas y clientes</h2>

      <!-- Resumen estadístico dinámico -->
      <p style="text-align: center; margin-bottom: 1.5rem; font-weight: 700; color: var(--morado-medio); font-size: 1.1rem;">
        <i class="fa-solid fa-star" style="color: #f5a623;" aria-hidden="true"></i>
        Calificación promedio: {{ promedioCalificacion }} / 5 ({{ totalResenas }} opiniones registradas)
      </p>

      <!-- Mensaje cuando la lista esté vacía -->
      <div v-if="resenas.length === 0" class="opiniones-vacio">
        <i class="fa-regular fa-comments" aria-hidden="true"></i>
        <p>Aún no hay reseñas publicadas. ¡Sé la primera persona en opinar!</p>
      </div>

      <!-- Renderizado reactivo de cada reseña -->
      <div v-else id="contenedor-resenas" class="opiniones-lista">
        <TarjetaResena
          v-for="resena in resenas"
          :key="resena.id"
          :resena="resena"
          @eliminar="borrarResena"
        />
      </div>
    </section>
  </main>
</template>
