<script setup>
// Componente reutilizable para la tabla comparativa de técnicas
defineProps({
  servicios: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="comparativa seccion" aria-labelledby="titulo-comparativa">
    <h2 id="titulo-comparativa" class="titulo-centrado">Compara las técnicas</h2>
    <div class="tabla-contenedor">
      <table class="tabla-comparativa">
        <caption class="solo-lectores">
          Comparación de precio, duración del servicio y duración puesta de cada técnica
        </caption>
        <thead>
          <tr>
            <th scope="col">Técnica</th>
            <th scope="col">Precio</th>
            <th scope="col">Duración del servicio</th>
            <th scope="col">Cuánto dura puesta</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="servicio in servicios" :key="servicio.id">
            <th scope="row">
              <RouterLink :to="'/detalle/' + servicio.id">{{ servicio.nombre }}</RouterLink>
            </th>
            <td data-label="Precio">{{ servicio.precio }}</td>
            <td data-label="Duración">{{ servicio.duracion }}</td>
            <td data-label="Cuánto dura">{{ servicio.duracionPuesta }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
