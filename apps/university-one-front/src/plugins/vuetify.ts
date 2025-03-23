import '@mdi/font/css/materialdesignicons.css'
import { useI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'
import i18n from '@/plugins/vue-i18n'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  locale: {
    adapter: createVueI18nAdapter({ useI18n, i18n }),
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.cyan.darken2,
          secondary: colors.amber.lighten1,
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: colors.cyan.darken4,
          secondary: colors.amber.darken3,
        },
      },
    },
    defaultTheme: 'light',
  },
})

export default vuetify
