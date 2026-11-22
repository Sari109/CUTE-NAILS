<script setup>
import { ref, computed } from 'vue'
import { servicios } from '../almacen/estado.js'
import TarjetaServicio from '../components/TarjetaServicio.vue'
import TablaComparativa from '../components/TablaComparativa.vue'

// Término de búsqueda reactivo con v-model
const terminoBusqueda = ref('')

// Filtrado dinámico de servicios
const serviciosFiltrados = computed(() => {
  const termino = terminoBusqueda.value.trim().toLowerCase()
  if (!termino) return servicios.value

  return servicios.value.filter((s) => {
    const nombreCoincide = s.nombre.toLowerCase().includes(termino)
    const descCoincide = s.descripcion && s.descripcion.toLowerCase().includes(termino)
    const catCoincide = s.categoria && s.categoria.toLowerCase().includes(termino)
    return nombreCoincide || descCoincide || catCoincide
  })
})
</script>

<template>
  <main>
    <!-- Banner de catálogo -->
    <header class="banner banner-pagina banner-catalogo">
      <div class="banner-texto">
        <h1>Catálogo de técnicas</h1>
        <p>Conoce nuestras 8 opciones para el cuidado de tus uñas</p>
      </div>
    </header>

    <section class="tecnicas" aria-labelledby="titulo-catalogo">
      <h2 id="titulo-catalogo" class="solo-lectores">Técnicas disponibles</h2>
      <p class="catalogo-intro">
        Descubre la técnica ideal para ti, compara precios y cuidados, y elige el estilo perfecto para lucir unas uñas hermosas.
      </p>

      <!-- Buscador reactivo de técnicas -->
      <div class="catalogo-herramientas">
        <div class="buscador-contenedor">
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          <input
            type="search"
            id="buscador-servicios"
            class="buscador-input"
            placeholder="Buscar técnica o servicio (ej: acrílicas, press on...)"
            aria-label="Buscar técnica"
            v-model="terminoBusqueda"
          />
        </div>
      </div>

      <!-- Tarjetas dinámicas de servicios -->
      <div class="tarjetas" id="contenedor-servicios">
        <TarjetaServicio
          v-for="servicio in serviciosFiltrados"
          :key="servicio.id"
          :servicio="servicio"
        />

        <!-- Mensaje cuando la búsqueda no da resultados -->
        <div v-if="serviciosFiltrados.length === 0" class="filtro-vacio">
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          <p>No encontramos ninguna técnica que coincida con tu búsqueda.</p>
        </div>
      </div>
    </section>

    <!-- Componente de tabla comparativa -->
    <TablaComparativa :servicios="servicios" />
  </main>
</template>
