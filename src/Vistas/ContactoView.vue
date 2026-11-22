<script setup>
import { reactive, ref } from 'vue'

// Estado reactivo del formulario de contacto
const formulario = reactive({
  nombre: '',
  correo: '',
  telefono: '',
  servicio: '',
  mensaje: ''
})

// Control de errores de validación
const errores = reactive({
  nombre: '',
  correo: '',
  telefono: '',
  servicio: '',
  mensaje: ''
})

const tocado = reactive({
  nombre: false,
  correo: false,
  telefono: false,
  servicio: false,
  mensaje: false
})

const mensajeExito = ref('')

// Validaciones en tiempo real
function validarNombre() {
  const patron = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/
  const limpio = formulario.nombre.trim()
  if (!limpio) {
    errores.nombre = 'El nombre es obligatorio.'
    return false
  }
  if (limpio.length < 3 || limpio.length > 50) {
    errores.nombre = 'Ingresa entre 3 y 50 letras.'
    return false
  }
  if (!patron.test(limpio)) {
    errores.nombre = 'Solo se permiten letras y espacios.'
    return false
  }
  errores.nombre = ''
  return true
}

function validarCorreo() {
  const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const limpio = formulario.correo.trim()
  if (!limpio) {
    errores.correo = 'El correo es obligatorio.'
    return false
  }
  if (!patron.test(limpio)) {
    errores.correo = 'Ingresa un correo válido (ejemplo: usuario@correo.com).'
    return false
  }
  errores.correo = ''
  return true
}

function validarTelefono() {
  const patron = /^[0-9]{10}$/
  const limpio = formulario.telefono.trim()
  if (!limpio) {
    errores.telefono = 'El celular es obligatorio.'
    return false
  }
  if (!patron.test(limpio)) {
    errores.telefono = 'Debe tener exactamente 10 dígitos numéricos.'
    return false
  }
  errores.telefono = ''
  return true
}

function validarServicio() {
  if (!formulario.servicio) {
    errores.servicio = 'Selecciona una técnica o motivo.'
    return false
  }
  errores.servicio = ''
  return true
}

function validarMensaje() {
  const limpio = formulario.mensaje.trim()
  if (!limpio) {
    errores.mensaje = 'El mensaje es obligatorio.'
    return false
  }
  if (limpio.length < 10) {
    errores.mensaje = `Debe tener al menos 10 caracteres (actual: ${limpio.length}).`
    return false
  }
  if (limpio.length > 500) {
    errores.mensaje = 'No puede superar los 500 caracteres.'
    return false
  }
  errores.mensaje = ''
  return true
}

// Procesar envío de mensaje
function enviarMensaje() {
  Object.keys(tocado).forEach((k) => (tocado[k] = true))

  const valido =
    validarNombre() &&
    validarCorreo() &&
    validarTelefono() &&
    validarServicio() &&
    validarMensaje()

  if (!valido) return

  // Crear mensaje amigable
  mensajeExito.value = `¡Gracias ${formulario.nombre}! Tu mensaje ha sido recibido. Te contactaremos pronto al ${formulario.telefono}.`

  // Limpiar campos
  formulario.nombre = ''
  formulario.correo = ''
  formulario.telefono = ''
  formulario.servicio = ''
  formulario.mensaje = ''

  Object.keys(tocado).forEach((k) => (tocado[k] = false))

  setTimeout(() => {
    mensajeExito.value = ''
  }, 6000)
}
</script>

<template>
  <main>
    <header class="banner banner-pagina banner-contacto">
      <div class="banner-texto">
        <h1>Contáctanos</h1>
        <p>Estamos listas para consentir tus manos y pies</p>
      </div>
    </header>

    <section class="contacto-layout" aria-labelledby="titulo-contacto">
      <h2 id="titulo-contacto" class="solo-lectores">Formulario y canales de contacto</h2>

      <!-- Columna 1: Formulario reactivo -->
      <form class="formulario" @submit.prevent="enviarMensaje" novalidate>
        <h3 class="contacto-subtitulo">Envíanos un mensaje</h3>

        <div v-if="mensajeExito" class="alerta alerta-exito" role="alert" style="margin-bottom: 1rem;">
          <i class="fa-solid fa-circle-check" aria-hidden="true"></i> {{ mensajeExito }}
        </div>

        <div class="campo">
          <label for="nombre-contacto">Nombre completo</label>
          <input
            type="text"
            id="nombre-contacto"
            placeholder="Tu nombre y apellido"
            v-model="formulario.nombre"
            :class="{ valido: tocado.nombre && !errores.nombre, invalido: tocado.nombre && errores.nombre }"
            @input="tocado.nombre = true; validarNombre()"
            @blur="tocado.nombre = true; validarNombre()"
          />
          <p v-if="tocado.nombre && errores.nombre" class="mensaje-error">
            <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {{ errores.nombre }}
          </p>
        </div>

        <div class="campos-fila">
          <div class="campo">
            <label for="correo-contacto">Correo electrónico</label>
            <input
              type="email"
              id="correo-contacto"
              placeholder="tucorreo@ejemplo.com"
              v-model="formulario.correo"
              :class="{ valido: tocado.correo && !errores.correo, invalido: tocado.correo && errores.correo }"
              @input="tocado.correo = true; validarCorreo()"
              @blur="tocado.correo = true; validarCorreo()"
            />
            <p v-if="tocado.correo && errores.correo" class="mensaje-error">
              <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {{ errores.correo }}
            </p>
          </div>

          <div class="campo">
            <label for="telefono-contacto">Teléfono celular</label>
            <input
              type="tel"
              id="telefono-contacto"
              placeholder="Ej: 3147051152"
              v-model="formulario.telefono"
              :class="{ valido: tocado.telefono && !errores.telefono, invalido: tocado.telefono && errores.telefono }"
              @input="tocado.telefono = true; validarTelefono()"
              @blur="tocado.telefono = true; validarTelefono()"
            />
            <p v-if="tocado.telefono && errores.telefono" class="mensaje-error">
              <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {{ errores.telefono }}
            </p>
          </div>
        </div>

        <div class="campo">
          <label for="servicio-contacto">Servicio de interés</label>
          <select
            id="servicio-contacto"
            v-model="formulario.servicio"
            :class="{ valido: tocado.servicio && !errores.servicio, invalido: tocado.servicio && errores.servicio }"
            @change="tocado.servicio = true; validarServicio()"
            @blur="tocado.servicio = true; validarServicio()"
          >
            <option value="">Selecciona una técnica</option>
            <option value="press-on">Press on ($50.000)</option>
            <option value="base-rubber">Base Rubber ($45.000)</option>
            <option value="acrilicas-tips">Acrílicas tips ($55.000)</option>
            <option value="acrilicas-esculpidas">Acrílicas esculpidas ($60.000)</option>
            <option value="dipping">Dipping ($45.000)</option>
            <option value="polygel">Polygel ($50.000)</option>
            <option value="semipermanente">Semipermanente ($30.000)</option>
            <option value="tradicional">Tradicional / Pedicura ($15.000)</option>
            <option value="consulta-general">Solo quiero hacer una consulta</option>
          </select>
          <p v-if="tocado.servicio && errores.servicio" class="mensaje-error">
            <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {{ errores.servicio }}
          </p>
        </div>

        <div class="campo">
          <label for="mensaje-contacto">¿En qué te podemos colaborar?</label>
          <textarea
            id="mensaje-contacto"
            rows="4"
            placeholder="Cuéntanos cuándo te gustaría agendar o qué diseño tienes en mente"
            v-model="formulario.mensaje"
            :class="{ valido: tocado.mensaje && !errores.mensaje, invalido: tocado.mensaje && errores.mensaje }"
            @input="tocado.mensaje = true; validarMensaje()"
            @blur="tocado.mensaje = true; validarMensaje()"
          ></textarea>
          <p class="ayuda">Entre 10 y 500 caracteres.</p>
          <p v-if="tocado.mensaje && errores.mensaje" class="mensaje-error">
            <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {{ errores.mensaje }}
          </p>
        </div>

        <button class="boton boton-grande" type="submit">
          <i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Enviar mensaje
        </button>
      </form>

      <!-- Columna 2: Canales e información -->
      <aside class="contacto-info" aria-label="Información del negocio">
        <article class="contacto-tarjeta">
          <h3>Escríbenos directamente</h3>
          <div class="contacto-enlaces">
            <a
              class="contacto-canal"
              href="https://wa.me/573147051152?text=Hola%2C%20quiero%20consultar%20por%20un%20servicio"
              target="_blank"
              rel="noopener"
            >
              <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <div>
                <strong>WhatsApp (Respuesta rápida)</strong>
                <p>314 705 1152</p>
              </div>
            </a>

            <a class="contacto-canal" href="https://instagram.com/cutenails_0121" target="_blank" rel="noopener">
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>
              <div>
                <strong>Instagram</strong>
                <p>@cutenails_0121</p>
              </div>
            </a>
          </div>
        </article>

        <article class="contacto-tarjeta">
          <h3>Horarios y cobertura</h3>
          <ul class="info-lista">
            <li>
              <i class="fa-regular fa-clock" aria-hidden="true"></i>
              <div>
                <strong>Lunes a sábado</strong>
                <p>8:00 a. m. a 6:00 p. m. (con cita previa)</p>
              </div>
            </li>
            <li>
              <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
              <div>
                <strong>Cobertura</strong>
                <p>Todo el perímetro urbano de Sahagún, Córdoba.</p>
              </div>
            </li>
          </ul>
        </article>

        <article class="contacto-tarjeta">
          <h3>Métodos de pago</h3>
          <p class="info-texto">Recibimos pagos en efectivo, transferencias por Nequi, Daviplata y Bancolombia.</p>
        </article>
      </aside>
    </section>
  </main>
</template>
