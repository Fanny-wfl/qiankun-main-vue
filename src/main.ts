import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerMicroApps, start } from 'qiankun'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

registerMicroApps([
  ...(import.meta.env.PROD
    ? [
        {
          name: 'app-purehtml',
          entry: import.meta.env.VITE_APP_PUREHTML_ENTRY,
          container: '#child-app',
          activeRule: '/app-purehtml',
        },
      ]
    : []),
  {
    name: 'app-vue',
    entry: import.meta.env.VITE_APP_VUE_HISTORY_ENTRY,
    container: '#child-app',
    activeRule: '/app-vue',
  },
])

start({
  sandbox: {
    experimentalStyleIsolation: true,
  },
})
