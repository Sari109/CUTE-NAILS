import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '../Vistas/InicioView.vue'
import CatalogoView from '../Vistas/CatalogoView.vue'
import DetalleView from '../Vistas/DetalleView.vue'
import PortafolioView from '../Vistas/PortafolioView.vue'
import ResenasView from '../Vistas/ResenasView.vue'
import NosotrosView from '../Vistas/NosotrosView.vue'
import ContactoView from '../Vistas/ContactoView.vue'

// Definición de las rutas del sitio en español
const rutas = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: CatalogoView
  },
  {
    path: '/detalle/:id?',
    name: 'detalle',
    component: DetalleView,
    props: true
  },
  {
    path: '/portafolio',
    name: 'portafolio',
    component: PortafolioView
  },
  {
    path: '/resenas',
    name: 'resenas',
    component: ResenasView
  },
  {
    path: '/sobre-nosotros',
    name: 'nosotros',
    component: NosotrosView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

// Creación de la instancia del enrutador
const enrutador = createRouter({
  history: createWebHistory(),
  routes: rutas,
  scrollBehavior(hacia, desde, posicionGuardada) {
    if (posicionGuardada) {
      return posicionGuardada
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default enrutador
