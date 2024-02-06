import createMiddleware from 'next-intl/middleware'
import { KEYS_OF_LANGUAGES } from '@/constants'

export default createMiddleware({
  // A list of all locales that are supported
  locales: KEYS_OF_LANGUAGES,

  // Used when no locale matches
  defaultLocale: 'en'
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|es)/:path*']
}
