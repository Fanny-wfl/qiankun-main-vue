import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8010,
    proxy: {
      // '/vue-history': {
      //   target: 'http://localhost:4173',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/vue-history/, ''),
      // },
    },
  },
  preview: {
    port: 8010,
  },
})
