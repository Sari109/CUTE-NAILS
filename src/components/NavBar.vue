<script setup>
import { ref } from 'vue'

const menuAbierto = ref(false)

function cerrarMenu() {
  menuAbierto.value = false
}
</script>

<template>
  <header class="cabecera">
    <div class="cabecera-interior">
      <RouterLink to="/" class="marca" aria-label="Cute Nails, ir al inicio" @click="cerrarMenu">
        <span class="marca-logo">CN</span>
        <span class="marca-nombre">Cute Nails</span>
      </RouterLink>

      <input
        type="checkbox"
        id="menu-toggle"
        class="menu-check"
        aria-label="Abrir o cerrar el menú"
        v-model="menuAbierto"
      />
      <label for="menu-toggle" class="hamburguesa" aria-hidden="true">
        <span></span><span></span><span></span>
      </label>

      <nav class="menu" aria-label="Menú principal">
        <ul>
          <li><RouterLink to="/" @click="cerrarMenu">Inicio</RouterLink></li>
          <li><RouterLink to="/catalogo" @click="cerrarMenu">Catálogo</RouterLink></li>
          <li><RouterLink to="/portafolio" @click="cerrarMenu">Portafolio</RouterLink></li>
          <li><RouterLink to="/resenas" @click="cerrarMenu">Reseñas</RouterLink></li>
          <li><RouterLink to="/sobre-nosotros" @click="cerrarMenu">Sobre nosotros</RouterLink></li>
          <li><RouterLink to="/contacto" @click="cerrarMenu">Contacto</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
