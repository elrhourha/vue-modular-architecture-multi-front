import { config } from '@vue/test-utils'
import ResizeObserver from 'resize-observer-polyfill'
import { createRouter, createWebHistory } from 'vue-router'
import 'vuetify/styles'
import i18n from './src/plugins/vue-i18n'
import vuetify from './src/plugins/vuetify'
import { routes } from './src/router'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

global.ResizeObserver = ResizeObserver
config.global.plugins = [vuetify, router, i18n]
