import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { lazyPlugin } from '@/directives'
import {componentPlugin} from "@/components/index.js"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
