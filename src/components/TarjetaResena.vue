<script setup>
// Componente reutilizable para mostrar una reseña de cliente
defineProps({
  resena: {
    type: Object,
    required: true
  }
})

// Evento emitido al padre para eliminar la opinión
defineEmits(['eliminar'])

// Función auxiliar en español para formatear fechas amigables
function formatearFecha(fechaTexto) {
  if (!fechaTexto) return ''
  const partes = fechaTexto.split('-')
  if (partes.length === 3) {
    const [anio, mes, dia] = partes
    const meses = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ]
    const nombreMes = meses[parseInt(mes, 10) - 1] || mes
    return `${parseInt(dia, 10)} de ${nombreMes} de ${anio}`
  }
  return fechaTexto
}
</script>

<template>
  <article class="tarjeta-resena" :data-id="resena.id">
    <header class="resena-cabecera">
      <div class="resena-autor-grupo">
        <div class="resena-avatar" aria-hidden="true">
          {{ resena.nombre ? resena.nombre.charAt(0).toUpperCase() : 'C' }}
        </div>
        <div>
          <h3 class="resena-autor">{{ resena.nombre }}</h3>
          <span class="resena-tecnica">
            <i class="fa-solid fa-spa" aria-hidden="true"></i> {{ resena.servicio }}
          </span>
        </div>
      </div>
      <div class="resena-estrellas" :aria-label="'Calificación: ' + resena.calificacion + ' de 5 estrellas'">
        <i
          v-for="estrella in 5"
          :key="estrella"
          class="fa-solid fa-star"
          :style="{ color: estrella <= resena.calificacion ? '#f5a623' : '#d1c7db' }"
          aria-hidden="true"
        ></i>
      </div>
    </header>

    <p class="resena-comentario">{{ resena.comentario }}</p>

    <footer class="resena-pie">
      <span class="resena-fecha">
        <i class="fa-regular fa-calendar" aria-hidden="true"></i> {{ formatearFecha(resena.fecha) }}
      </span>
      <button
        type="button"
        class="boton-eliminar-resena"
        title="Eliminar reseña"
        :aria-label="'Eliminar reseña de ' + resena.nombre"
        @click="$emit('eliminar', resena.id)"
      >
        <i class="fa-solid fa-trash-can" aria-hidden="true"></i> Eliminar
      </button>
    </footer>
  </article>
</template>
