<script setup>
import { computed } from 'vue'
import { servicios } from '../almacen/estado.js'
import TarjetaServicio from '../components/TarjetaServicio.vue'

// Seleccionar las 3 técnicas destacadas para el inicio
const tecnicasDestacadas = computed(() => servicios.value.slice(0, 3))
</script>

<template>
  <main>
    <!-- Hero principal -->
    <section class="hero" aria-labelledby="titulo-hero">
      <div class="hero-contenido">
        <p class="hero-etiqueta">Uñas a domicilio · Sahagún, Córdoba</p>
        <h1 id="titulo-hero">Tus uñas perfectas, sin salir de casa</h1>
        <p class="hero-texto">Press on, acrílicas, polygel, semipermanente y más. Elige tu técnica y vamos a ti.</p>
        <div class="hero-botones">
          <RouterLink class="boton boton-grande" to="/catalogo">Ver catálogo y precios</RouterLink>
          <RouterLink class="boton boton-grande boton-borde" to="/portafolio">Ver nuestros trabajos</RouterLink>
        </div>
      </div>
    </section>

    <!-- Beneficios del servicio -->
    <section class="beneficios" aria-labelledby="titulo-beneficios">
      <h2 id="titulo-beneficios" class="solo-lectores">Por qué elegirnos</h2>
      <ul class="beneficios-lista">
        <li class="beneficio">
          <i class="fa-solid fa-house-chimney" aria-hidden="true"></i>
          <h3>A domicilio</h3>
          <p>Vamos a tu casa en Sahagún, Córdoba.</p>
        </li>
        <li class="beneficio">
          <i class="fa-solid fa-gem" aria-hidden="true"></i>
          <h3>Para todos los gustos</h3>
          <p>8 técnicas, desde $15.000.</p>
        </li>
        <li class="beneficio">
          <i class="fa-solid fa-calendar-check" aria-hidden="true"></i>
          <h3>De lunes a sábado</h3>
          <p>Agenda el día que mejor te quede.</p>
        </li>
      </ul>
    </section>

    <!-- Algunas técnicas destacadas -->
    <section class="tecnicas seccion" aria-labelledby="titulo-tecnicas">
      <div class="tecnicas-encabezado">
        <h2 id="titulo-tecnicas">Algunas de nuestras técnicas</h2>
        <RouterLink class="ver-mas" to="/catalogo">
          Ver todas <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </RouterLink>
      </div>

      <div class="tarjetas">
        <TarjetaServicio
          v-for="servicio in tecnicasDestacadas"
          :key="servicio.id"
          :servicio="servicio"
        />
      </div>
    </section>

    <!-- Pasos para agendar -->
    <section class="pasos seccion" aria-labelledby="titulo-pasos">
      <h2 id="titulo-pasos" class="titulo-centrado">¿Cómo funciona?</h2>
      <ol class="pasos-lista">
        <li class="paso">
          <span class="paso-numero" aria-hidden="true">1</span>
          <h3>Elige tu técnica</h3>
          <p>Mira el catálogo con sus precios y escoge la que más te guste.</p>
        </li>
        <li class="paso">
          <span class="paso-numero" aria-hidden="true">2</span>
          <h3>Agenda tu cita</h3>
          <p>Escríbenos por WhatsApp o desde la página de contacto y acordamos el día y la hora.</p>
        </li>
        <li class="paso">
          <span class="paso-numero" aria-hidden="true">3</span>
          <h3>Te visitamos</h3>
          <p>Llegamos a tu casa con lo necesario para dejar tus uñas listas.</p>
        </li>
      </ol>
    </section>

    <!-- Muestra de trabajos con marquesina infinita -->
    <section class="muestra seccion" aria-labelledby="titulo-muestra">
      <div class="tecnicas-encabezado">
        <h2 id="titulo-muestra">Nuestros trabajos</h2>
        <RouterLink class="ver-mas" to="/portafolio">
          Ver portafolio <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </RouterLink>
      </div>

      <div class="marquesina" aria-label="Galería continua de trabajos recientes">
        <div class="marquesina-pista">
          <!-- Bloque original de fotos -->
          <div class="marquesina-grupo">
            <div class="marquesina-item">
              <img src="/img/despues1.jpg" alt="Manicure con diseño rosado y fucsia" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues2.jpg" alt="Pedicure con esmalte morado" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues3.jpg" alt="Uñas esculpidas largas tono vino tinto" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues4.jpg" alt="Diseño de uñas con detalles delicados" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues5.png" alt="Transformación de uñas antes y después" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues6.png" alt="Acabado semipermanente impecable" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues7.png" alt="Manicure delicada en tonos suaves" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues8.png" alt="Pedicure spa con esmalte verde esmeralda" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
          </div>

          <!-- Bloque duplicado para desplazamiento infinito -->
          <div class="marquesina-grupo" aria-hidden="true">
            <div class="marquesina-item">
              <img src="/img/despues1.jpg" alt="" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues2.jpg" alt="" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues3.jpg" alt="" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues4.jpg" alt="" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues5.png" alt="" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues6.png" alt="" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues7.png" alt="" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
            <div class="marquesina-item">
              <img src="/img/despues8.png" alt="" loading="lazy" />
              <span class="marquesina-etiqueta">@cutenails_0121</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Preguntas frecuentes -->
    <section class="faq seccion" aria-labelledby="titulo-faq">
      <h2 id="titulo-faq" class="titulo-centrado">Preguntas frecuentes</h2>
      <div class="faq-lista">
        <details class="faq-item">
          <summary>¿Atienden manos y pies?</summary>
          <p>Sí, hacemos manicure y pedicure, para mujeres y para hombres.</p>
        </details>
        <details class="faq-item">
          <summary>¿Cuánto dura un servicio?</summary>
          <p>Entre 40 minutos y 2 horas, según la técnica. En cada técnica del catálogo verás su duración.</p>
        </details>
        <details class="faq-item">
          <summary>¿Cada cuánto se hacen los rellenos?</summary>
          <p>En acrílicas, cada 2 o 3 semanas. En polygel, puede durar hasta 4 semanas según el largo y el cuidado.</p>
        </details>
        <details class="faq-item">
          <summary>¿Puedo quitarme las uñas en casa?</summary>
          <p>Recomendamos el retiro profesional en gel, dipping y polygel, porque hacerlo en casa puede dañar tu uña natural.</p>
        </details>
        <details class="faq-item">
          <summary>¿Dónde y cuándo atienden?</summary>
          <p>Vamos a tu casa en Sahagún, Córdoba, de lunes a sábado.</p>
        </details>
      </div>
    </section>
  </main>
</template>
