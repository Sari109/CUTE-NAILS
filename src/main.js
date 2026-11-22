import { createApp } from 'vue'
import App from './App.vue'
import enrutador from './enrutador'
import './assets/styles.css'

const aplicacion = createApp(App)
aplicacion.use(enrutador)
aplicacion.mount('#app')
