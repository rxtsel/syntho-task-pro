import { KEYS_OF_LANGUAGES } from '@/constants'
import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const nextIntlMiddleware = createMiddleware({
  locales: KEYS_OF_LANGUAGES,
  defaultLocale: 'en',
  localePrefix: 'as-needed'
})

export default function middleware(req: NextRequest): NextResponse {
  return nextIntlMiddleware(req)
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
