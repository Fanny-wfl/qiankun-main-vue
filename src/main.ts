import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import type { App as AppInterface } from 'vue'

import App from './App.vue'
import router from './router'

import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper'

let app: AppInterface | null = null
function render(props: { container?: HTMLElement } = {}) {
  const { container } = props

  app = createApp(App)

  app.use(createPinia())
  app.use(router)

  app.mount(
    container ? (container.querySelector('#app') as HTMLElement) : '#app',
  )
}

// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}

renderWithQiankun({
  bootstrap() {
    console.log('[vue] vue app bootstraped')
  },
  mount(props) {
    console.log('[vue] props from main framework', props)
    render(props)
  },
  unmount(props) {
    console.log('[vue] app will unmount')
    app?.unmount()
  },
  update(props: any) {
    console.log('vite update: ', props)
  },
})
