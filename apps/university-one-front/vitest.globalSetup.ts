import { routes } from '@/router'
import { config } from '@vue/test-utils'
import ResizeObserver from 'resize-observer-polyfill'
import { createRouter, createWebHistory } from 'vue-router'
import 'vuetify/styles'
import i18n from '@/plugins/vue-i18n'
import vuetify from '@/plugins/vuetify'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

global.ResizeObserver = ResizeObserver
config.global.plugins = [vuetify, router, i18n]
