import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BaseInput from '@/components/inputs/BaseInput.vue'
import VueSelect from 'vue-select'

import './assets/tailwind.css'
import './assets/main.css'
import ButtonComponent from '@/components/ButtonComponent.vue'

const app = createApp(App)

app.component('v-select', VueSelect)
app.component('base-input', BaseInput)
app.component('p-button', ButtonComponent)
app.use(createPinia())
app.use(router)

app.mount('#app')
