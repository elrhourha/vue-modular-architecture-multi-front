import type { AppLocalValue, AppLocale } from '@/core/types/locales.types'
import en from './locales/en.json'
import fr from './locales/fr.json'

export { default as usersModuleRoutes, USERS_LIST_ROUTE_NAME } from './routes'

export const locales: Record<AppLocale, AppLocalValue> = {
  fr,
  en,
}

export const USERS_MODULE_NAME = 'users'
