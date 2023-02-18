import { createApp } from 'vue'
import { store } from "./store";
import App from './App.vue'

import '@/plugins/Map.TouchZoom_custom.js'

const app = createApp(App)
  .use(store)

app.mount('#app')
