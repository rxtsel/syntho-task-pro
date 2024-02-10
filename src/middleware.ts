import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { locales, localePrefix } from '@/config'

const nextIntlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en'
})

export default function middleware(req: NextRequest): NextResponse {
  return nextIntlMiddleware(req)
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
