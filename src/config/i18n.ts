import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { KEYS_OF_LANGUAGES } from '@/constants'
import { TLanguage } from '@/types'

// Can be imported from a shared config
const locales = KEYS_OF_LANGUAGES

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as TLanguage)) notFound()

  return {
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('../messages/en.json')
        : import(`../messages/${locale}.json`))
    ).default
  }
})
