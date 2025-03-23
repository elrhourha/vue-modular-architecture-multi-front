import appEnGlobalLocale from '@/locales/en.json'
import appFrGlobalLocale from '@/locales/fr.json'
import { createI18n } from 'vue-i18n'
import { en as vuetifyEnLocale, fr as vuetifyFrLocale } from 'vuetify/locale'
import type { AppLocalValue, AppLocale } from '@/core/types/locales.types'
import { ObjectKeys } from '@/core/utils/type-guard'
import { TODOS_MODULE_NAME, locales as todosModuleLocales } from '@/modules/todos'

const DEFAULT_LOCALE = 'en'

const getCurrentLocale = (): string => {
  return localStorage.getItem('locale') ?? import.meta.env.VITE_I18N_LOCALE ?? DEFAULT_LOCALE
}

/**
 * - $vuetify object is used to integrate vuetify translation into vue-i18n
 * - you can customize vuetify default translations for each locale
 */
const i18n = createI18n({
  legacy: false,
  locale: getCurrentLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    fr: {
      ...appFrGlobalLocale,
      $vuetify: {
        ...vuetifyFrLocale,
      },
    },
    en: {
      ...appEnGlobalLocale,
      $vuetify: {
        ...vuetifyEnLocale,
      },
    },
  },
})

/**
 * Register app modules messages to i18n instance
 * @param moduleName
 * @param messages
 */
const registerModuleMessages = (moduleName: string, messages: Record<AppLocale, AppLocalValue>) => {
  ObjectKeys(messages).forEach((locale: AppLocale) => {
    i18n.global.mergeLocaleMessage(locale, {
      [moduleName]: messages[locale],
    })
  })
}

registerModuleMessages(TODOS_MODULE_NAME, todosModuleLocales)
export default i18n
