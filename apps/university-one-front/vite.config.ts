import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig(({}) => {
  return {
    base: '/',
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia'],
            vuetify: ['vuetify', 'vuetify/components', 'vuetify/directives', 'vuetify/styles'],
            materialdesignicons: ['@mdi/font/css/materialdesignicons.css'],
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['legacy-js-api'],
        },
        sass: {
          api: 'modern-compiler',
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    plugins: [
      vue(),
      vueDevTools(),
      vuetify({
        autoImport: true,
        /*
        This config should be set if we will customize the Vuetify theme.
         styles: {
          configFile: 'src/assets/settings.scss',
        },*/
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
