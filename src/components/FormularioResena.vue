<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['guardar'])

// Estado reactivo del formulario en español
const formulario = reactive({
  nombre: '',
  correo: '',
  servicio: '',
  fecha: new Date().toISOString().split('T')[0],
  calificacion: 5,
  comentario: '',
  acepto: false
})

// Control de errores y campos tocados
const errores = reactive({
  nombre: '',
  correo: '',
  servicio: '',
  fecha: '',
  calificacion: '',
  comentario: '',
  acepto: ''
})

const tocado = reactive({
  nombre: false,
  correo: false,
  servicio: false,
  fecha: false,
  calificacion: false,
  comentario: false,
  acepto: false
})

const mensajeExito = ref('')

// Funciones de validación de negocio en español
function validarNombre() {
  const patron = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/
  const limpio = formulario.nombre.trim()
  if (!limpio) {
    errores.nombre = 'El nombre es obligatorio.'
    return false
  }
  if (limpio.length < 3 || limpio.length > 40) {
    errores.nombre = 'Debe tener entre 3 y 40 letras.'
    return false
  }
  if (!patron.test(limpio)) {
    errores.nombre = 'Solo se permiten letras y espacios (sin números ni símbolos).'
    return false
  }
  errores.nombre = ''
  return true
}

function validarCorreo() {
  const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const limpio = formulario.correo.trim()
  if (!limpio) {
    errores.correo = 'El correo electrónico es obligatorio.'
    return false
  }
  if (!patron.test(limpio)) {
    errores.correo = 'Ingresa un correo electrónico válido (ejemplo: usuario@correo.com).'
    return false
  }
  errores.correo = ''
  return true
}

function validarServicio() {
  if (!formulario.servicio) {
    errores.servicio = 'Por favor selecciona la técnica que te realizaste.'
    return false
  }
  errores.servicio = ''
  return true
}

function validarFecha() {
  if (!formulario.fecha) {
    errores.fecha = 'La fecha del servicio es obligatoria.'
    return false
  }
  errores.fecha = ''
  return true
}

function validarCalificacion() {
  const num = Number(formulario.calificacion)
  if (!num || isNaN(num) || num < 1 || num > 5) {
    errores.calificacion = 'Ingresa una calificación entre 1 y 5.'
    return false
  }
  errores.calificacion = ''
  return true
}

function validarComentario() {
  const limpio = formulario.comentario.trim()
  if (!limpio) {
    errores.comentario = 'El comentario es obligatorio.'
    return false
  }
  if (limpio.length < 20) {
    errores.comentario = `Debe tener al menos 20 caracteres (actual: ${limpio.length}).`
    return false
  }
  if (limpio.length > 500) {
    errores.comentario = 'No puede superar los 500 caracteres.'
    return false
  }
  errores.comentario = ''
  return true
}

function validarAcepto() {
  if (!formulario.acepto) {
    errores.acepto = 'Debes aceptar la publicación de tu reseña.'
    return false
  }
  errores.acepto = ''
  return true
}

// Función para enviar y emitir al componente padre
function procesarEnvio() {
  // Marcar todos los campos como tocados para mostrar validaciones
  Object.keys(tocado).forEach((k) => (tocado[k] = true))

  const esValido =
    validarNombre() &&
    validarCorreo() &&
    validarServicio() &&
    validarFecha() &&
    validarCalificacion() &&
    validarComentario() &&
    validarAcepto()

  if (!esValido) return

  // Mapear el nombre descriptivo de la técnica
  const mapaNombres = {
    'press-on': 'Press on',
    'base-rubber': 'Base Rubber',
    'acrilicas-tips': 'Acrílicas tips',
    'dipping': 'Dipping',
    'acrilicas-esculpidas': 'Acrílicas esculpidas',
    'polygel': 'Polygel',
    'semipermanente': 'Semipermanente',
    'tradicional': 'Tradicional'
  }

  // Emisión del evento personalizado
  emit('guardar', {
    nombre: formulario.nombre.trim(),
    correo: formulario.correo.trim(),
    servicio: mapaNombres[formulario.servicio] || formulario.servicio,
    servicioValor: formulario.servicio,
    fecha: formulario.fecha,
    calificacion: Number(formulario.calificacion),
    comentario: formulario.comentario.trim()
  })

  // Mensaje de éxito
  mensajeExito.value = '¡Gracias por tu opinión! Tu reseña ha sido publicada con éxito.'

  // Limpiar el formulario
  formulario.nombre = ''
  formulario.correo = ''
  formulario.servicio = ''
  formulario.fecha = new Date().toISOString().split('T')[0]
  formulario.calificacion = 5
  formulario.comentario = ''
  formulario.acepto = false

  Object.keys(tocado).forEach((k) => (tocado[k] = false))

  setTimeout(() => {
    mensajeExito.value = ''
  }, 5000)
}
</script>

<template>
  <form class="formulario" @submit.prevent="procesarEnvio" novalidate>
    <div v-if="mensajeExito" class="alerta alerta-exito" role="alert" style="margin-bottom: 1rem;">
      <i class="fa-solid fa-circle-check" aria-hidden="true"></i> {{ mensajeExito }}
    </div>

    <div class="campo">
      <label for="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
        placeholder="Tu nombre"
        v-model="formulario.nombre"
        :class="{ valido: tocado.nombre && !errores.nombre, invalido: tocado.nombre && errores.nombre }"
        @input="tocado.nombre = true; validarNombre()"
        @blur="tocado.nombre = true; validarNombre()"
      />
      <p v-if="tocado.nombre && errores.nombre" class="mensaje-error">
        <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {{ errores.nombre }}
      </p>
    </div>

    <div class="campo">
      <label for="correo">Correo electrónico</label>
      <input
        type="email"
        id="correo"
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

    <div class="campos-fila">
      <div class="campo">
        <label for="servicio">Técnica que te hiciste</label>
        <select
          id="servicio"
          v-model="formulario.servicio"
          :class="{ valido: tocado.servicio && !errores.servicio, invalido: tocado.servicio && errores.servicio }"
          @change="tocado.servicio = true; validarServicio()"
          @blur="tocado.servicio = true; validarServicio()"
        >
          <option value="">Elige una técnica</option>
          <option value="press-on">Press on</option>
          <option value="base-rubber">Base Rubber</option>
          <option value="acrilicas-tips">Acrílicas tips</option>
          <option value="dipping">Dipping</option>
          <option value="acrilicas-esculpidas">Acrílicas esculpidas</option>
          <option value="polygel">Polygel</option>
          <option value="semipermanente">Semipermanente</option>
          <option value="tradicional">Tradicional</option>
        </select>
        <p v-if="tocado.servicio && errores.servicio" class="mensaje-error">
          <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {{ errores.servicio }}
        </p>
      </div>

      <div class="campo">
        <label for="fecha">Fecha del servicio</label>
        <input
          type="date"
          id="fecha"
          v-model="formulario.fecha"
          :class="{ valido: tocado.fecha && !errores.fecha, invalido: tocado.fecha && errores.fecha }"
          @change="tocado.fecha = true; validarFecha()"
          @blur="tocado.fecha = true; validarFecha()"
          min="2025-01-01"
          max="2026-12-31"
        />
        <p v-if="tocado.fecha && errores.fecha" class="mensaje-error">
          <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {{ errores.fecha }}
        </p>
      </div>
    </div>

    <div class="campo">
      <label for="calificacion">Calificación (de 1 a 5)</label>
      <input
        type="number"
        id="calificacion"
        v-model="formulario.calificacion"
        min="1"
        max="5"
        step="1"
        :class="{ valido: tocado.calificacion && !errores.calificacion, invalido: tocado.calificacion && errores.calificacion }"
        @input="tocado.calificacion = true; validarCalificacion()"
        @blur="tocado.calificacion = true; validarCalificacion()"
      />
      <p v-if="tocado.calificacion && errores.calificacion" class="mensaje-error">
        <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {{ errores.calificacion }}
      </p>
    </div>

    <div class="campo">
      <label for="comentario">Tu comentario</label>
      <textarea
        id="comentario"
        rows="5"
        placeholder="Cuéntanos cómo te fue"
        v-model="formulario.comentario"
        :class="{ valido: tocado.comentario && !errores.comentario, invalido: tocado.comentario && errores.comentario }"
        @input="tocado.comentario = true; validarComentario()"
        @blur="tocado.comentario = true; validarComentario()"
      ></textarea>
      <p class="ayuda">Entre 20 y 500 caracteres.</p>
      <p v-if="tocado.comentario && errores.comentario" class="mensaje-error">
        <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {{ errores.comentario }}
      </p>
    </div>

    <div class="campo campo-check">
      <input
        type="checkbox"
        id="acepto"
        v-model="formulario.acepto"
        @change="tocado.acepto = true; validarAcepto()"
      />
      <label for="acepto">Acepto que mi reseña se publique en la página.</label>
      <p v-if="tocado.acepto && errores.acepto" class="mensaje-error">
        <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {{ errores.acepto }}
      </p>
    </div>

    <button type="submit" class="boton">Publicar reseña</button>
  </form>
</template>
