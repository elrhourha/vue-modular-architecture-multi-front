export const AppLocales = ['fr', 'en'] as const
export type AppLocale = (typeof AppLocales)[number]
export type AppLocalValue = string | { [key: string]: AppLocalValue }
