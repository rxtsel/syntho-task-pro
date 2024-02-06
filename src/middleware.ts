import createMiddleware from 'next-intl/middleware'
import { KEYS_OF_LANGUAGES } from '@/constants'

export default createMiddleware({
  // A list of all locales that are supported
  locales: KEYS_OF_LANGUAGES,

  // Used when no locale matches
  defaultLocale: 'en'
})

// this return a string like "en|es|fr"
const locales = KEYS_OF_LANGUAGES.join('|')

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', `/(${locales})/:path*`]
}
