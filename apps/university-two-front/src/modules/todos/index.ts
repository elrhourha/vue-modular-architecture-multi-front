import type { AppLocalValue, AppLocale } from '@/core/types/locales.types'
import en from './locales/en.json'
import fr from './locales/fr.json'

export {
  default as todosModuleRoutes,
  TODOS_LIST_ROUTE_NAME,
  TODOS_LIST_ROUTE_PATH,
} from './routes'

export const locales: Record<AppLocale, AppLocalValue> = {
  fr,
  en,
}

export const TODOS_MODULE_NAME = 'todos'
