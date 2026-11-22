import { ref, computed } from 'vue'

// Catálogo oficial de servicios y técnicas de Cute Nails
export const listaServicios = [
  {
    id: 'press-on',
    nombre: 'Press on',
    precio: '$50.000',
    precioNumero: 50000,
    duracion: '45 min',
    duracionPuesta: '1 a 2 semanas',
    imagen: '/img/press_on.jpg',
    alt: 'Uñas press on decoradas',
    descripcion: 'Uñas postizas reutilizables, diseñadas a tu gusto y aplicadas en minutos, sin dañar tu uña natural.',
    categoria: 'Extensiones',
    recomendaciones: [
      'Duran entre una y dos semanas, según el pegamento y el cuidado.',
      'Evita golpear las yemas contra superficies duras y no las arranques.',
      'Usa guantes para limpiar y evita mantener las manos sumergidas en agua.'
    ]
  },
  {
    id: 'base-rubber',
    nombre: 'Base Rubber',
    precio: '$45.000',
    precioNumero: 45000,
    duracion: '1 h',
    duracionPuesta: '3 a 4 semanas',
    imagen: '/img/base_rubber.jpg',
    alt: 'Uñas con técnica base rubber',
    descripcion: 'Base de gel flexible que nivela y fortalece tu uña natural. Incluye limado, cutícula y esmaltado de tu preferencia.',
    categoria: 'Esmaltado y Cuidado',
    recomendaciones: [
      'Ideal si tus uñas son quebradizas o tienen estrías.',
      'Programa el mantenimiento cada 3 o 4 semanas para cuidar el crecimiento.',
      'Aplica aceite de cutícula a diario para mantener la flexibilidad.'
    ]
  },
  {
    id: 'acrilicas-tips',
    nombre: 'Acrílicas tips',
    precio: '$55.000',
    precioNumero: 55000,
    duracion: '1 h 30 min',
    duracionPuesta: '3 semanas (relleno)',
    imagen: '/img/acrilicas_tips.jpg',
    alt: 'Uñas acrílicas con tips de acabado natural',
    descripcion: 'Extensión en tips con acabado natural y en el estilo que desees. Incluye limado, cutícula y esmaltado de tu preferencia.',
    categoria: 'Extensiones',
    recomendaciones: [
      'Llega sin esmalte y con las cutículas hidratadas.',
      'Haz el relleno cada 2 o 3 semanas; pasar de 3 aumenta el riesgo de que se levanten.',
      'No uses las uñas como herramienta para abrir o empujar cosas.'
    ]
  },
  {
    id: 'dipping',
    nombre: 'Dipping',
    precio: '$45.000',
    precioNumero: 45000,
    duracion: '1 h',
    duracionPuesta: '2 a 3 semanas',
    imagen: '/img/dipping.jpg',
    alt: 'Uñas con técnica dipping',
    descripcion: 'Técnica con polvo de color aplicado en capas, de acabado duradero y ligero.',
    categoria: 'Esmaltado y Cuidado',
    recomendaciones: [
      'Ideal para quien busca durabilidad sin usar lámpara UV/LED.',
      'Evita el contacto prolongado con acetona o solventes fuertes.',
      'Aplica crema de manos con regularidad.'
    ]
  },
  {
    id: 'acrilicas-esculpidas',
    nombre: 'Acrílicas esculpidas',
    precio: '$60.000',
    precioNumero: 60000,
    duracion: '2 h',
    duracionPuesta: '3 semanas (relleno)',
    imagen: '/img/acrilicas_esculpidas.jpg',
    alt: 'Uñas acrílicas esculpidas',
    descripcion: 'Extensión esculpida sobre molde, hecha a la medida de tu uña, sin usar tips.',
    categoria: 'Extensiones',
    recomendaciones: [
      'Es la técnica que más tiempo toma: la primera cita puede durar hasta 2 horas.',
      'Programa el relleno cada 2 o 3 semanas para evitar que se levanten.',
      'Llega sin esmalte y con las cutículas hidratadas.'
    ]
  },
  {
    id: 'polygel',
    nombre: 'Polygel',
    precio: '$50.000',
    precioNumero: 50000,
    duracion: '1 h 30 min',
    duracionPuesta: '3 a 4 semanas',
    imagen: '/img/polygel.jpg',
    alt: 'Uñas con técnica polygel',
    descripcion: 'Mezcla de gel y acrílico, ligera y flexible, ideal para alargar o reforzar tus uñas.',
    categoria: 'Extensiones',
    recomendaciones: [
      'Más ligera que el acrílico tradicional y sin olor fuerte.',
      'Mantenimiento recomendado cada 3 semanas.',
      'Usa guantes para tareas de limpieza doméstica.'
    ]
  },
  {
    id: 'semipermanente',
    nombre: 'Semipermanente',
    precio: '$30.000',
    precioNumero: 30000,
    duracion: '50 min',
    duracionPuesta: '2 a 3 semanas',
    imagen: '/img/semi.jpg',
    alt: 'Esmaltes para uñas semipermanentes',
    descripcion: 'Esmalte en gel curado con lámpara, con brillo y color por varias semanas.',
    categoria: 'Esmaltado y Cuidado',
    recomendaciones: [
      'Dura unas 2 semanas; retíralo entre la semana 2 y la 3.',
      'Si empieza a levantarse, retíralo pronto: la humedad se queda atrapada debajo.',
      'Deja descansar tus uñas alrededor de una semana entre aplicaciones y usa aceite de cutículas.'
    ]
  },
  {
    id: 'tradicional',
    nombre: 'Tradicional',
    precio: '$15.000',
    precioNumero: 15000,
    duracion: '40 min',
    duracionPuesta: '5 a 7 días',
    imagen: '/img/tradicional.jpg',
    alt: 'Uñas con esmaltado tradicional',
    descripcion: 'Esmaltado tradicional con limado, cutícula y el color que prefieras.',
    categoria: 'Esmaltado y Cuidado',
    recomendaciones: [
      'Es la opción más rápida y económica, pero dura menos que el gel.',
      'Espera a que el esmalte seque por completo antes de hacer labores manuales.',
      'Hidrata cutículas y manos a diario para que se vean cuidadas.'
    ]
  }
]

// Clave para almacenamiento en localStorage del navegador
const CLAVE_LOCALSTORAGE_RESENAS = 'cutenails_resenas_v1'

// Reseñas de ejemplo iniciales (semilla)
const RESENAS_INICIALES = [
  {
    id: 1731000001,
    nombre: 'Valentina Ruiz',
    servicio: 'Base Rubber',
    servicioValor: 'base-rubber',
    fecha: '2026-10-18',
    calificacion: 5,
    comentario: 'Excelente servicio a domicilio en Sahagún. Me encantó el acabado y la dedicación con mis uñas naturales, ¡quedaron súper resistentes!'
  },
  {
    id: 1731000002,
    nombre: 'Camila Gómez',
    servicio: 'Press on',
    servicioValor: 'press-on',
    fecha: '2026-10-24',
    calificacion: 5,
    comentario: 'Hermoso diseño press on, duradero y cómodo. La atención fue puntual y muy profesional. ¡Recomendadísima al 100%!'
  }
]

// Función para cargar reseñas desde localStorage
function cargarResenas() {
  try {
    const datosGuardados = localStorage.getItem(CLAVE_LOCALSTORAGE_RESENAS)
    if (!datosGuardados) {
      localStorage.setItem(CLAVE_LOCALSTORAGE_RESENAS, JSON.stringify(RESENAS_INICIALES))
      return [...RESENAS_INICIALES]
    }
    const parseadas = JSON.parse(datosGuardados)
    return Array.isArray(parseadas) ? parseadas : [...RESENAS_INICIALES]
  } catch (error) {
    console.error('Error al cargar reseñas desde localStorage:', error)
    return [...RESENAS_INICIALES]
  }
}

// Variables reactivas compartidas
export const servicios = ref(listaServicios)
export const resenas = ref(cargarResenas())

// Guardar en localStorage
function guardarEnAlmacenamientoLocal() {
  try {
    localStorage.setItem(CLAVE_LOCALSTORAGE_RESENAS, JSON.stringify(resenas.value))
  } catch (error) {
    console.error('Error al guardar reseñas:', error)
  }
}

// Función para buscar un servicio según su identificador
export function obtenerServicioPorId(idBuscado) {
  if (!idBuscado) return listaServicios[0]
  return listaServicios.find((servicio) => servicio.id === idBuscado) || listaServicios[0]
}

// Función para registrar una nueva reseña
export function agregarResena(nuevaResena) {
  const resenaCompleta = {
    id: Date.now(),
    nombre: nuevaResena.nombre,
    servicio: nuevaResena.servicio,
    servicioValor: nuevaResena.servicioValor || nuevaResena.servicio.toLowerCase().replace(/\s+/g, '-'),
    fecha: nuevaResena.fecha || new Date().toISOString().split('T')[0],
    calificacion: Number(nuevaResena.calificacion),
    comentario: nuevaResena.comentario
  }
  resenas.value.unshift(resenaCompleta)
  guardarEnAlmacenamientoLocal()
  return resenaCompleta
}

// Función para eliminar una reseña
export function eliminarResena(id) {
  resenas.value = resenas.value.filter((r) => r.id !== id)
  guardarEnAlmacenamientoLocal()
}

// Total de opiniones registradas
export const totalResenas = computed(() => resenas.value.length)

// Promedio general de calificación
export const promedioCalificacion = computed(() => {
  if (resenas.value.length === 0) return '0.0'
  const suma = resenas.value.reduce((acumulador, r) => acumulador + r.calificacion, 0)
  return (suma / resenas.value.length).toFixed(1)
})
