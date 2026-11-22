<script setup>
// Componente reutilizable para mostrar cada técnica o servicio
defineProps({
  servicio: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="tarjeta">
    <img :src="servicio.imagen" :alt="servicio.alt || servicio.nombre" loading="lazy" />
    <div class="tarjeta-info">
      <h3>{{ servicio.nombre }}</h3>
      <p class="precio">{{ servicio.precio }}</p>
      <p class="duracion">
        <i class="fa-regular fa-clock" aria-hidden="true"></i> {{ servicio.duracion }}
      </p>
      <RouterLink class="boton" :to="'/detalle/' + servicio.id">Ver detalle</RouterLink>
    </div>
  </article>
</template>
