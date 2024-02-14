import { localePrefix, locales } from '@/config'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { ROUTES, PRIVATE_ROUTES } from './constants'
import { Database } from './types/database.types'

const nextIntlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en'
})

const authMiddleware = (req: NextRequest): NextResponse => {
  return nextIntlMiddleware(req)
}

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const requestUrl = new URL(req.url)
  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient<Database>({ req, res })

  const isPrivatePage = PRIVATE_ROUTES.some(route => requestUrl.pathname.includes(route))
  const { data } = await supabase.auth.getSession()

  if (!data.session && isPrivatePage) {
    // Redirect to login if not authenticated and trying to access a private route
    return NextResponse.redirect(new URL(ROUTES.auth.login, requestUrl))
  }

  if (
    (data.session && req.nextUrl.pathname === ROUTES.root) ||
    (data.session && req.nextUrl.pathname.includes(ROUTES.auth.auth))
  ) {
    // Redirect to dashboard if authenticated and trying to access the root page
    return NextResponse.redirect(new URL(ROUTES.private.dashboard, requestUrl))
  }

  if (!data.session && PRIVATE_ROUTES.includes(requestUrl.pathname)) {
    // Redirect to login if not authenticated and trying to access a private route
    return NextResponse.redirect(new URL(ROUTES.auth.login, requestUrl))
  }

  // For public routes or authenticated user trying to access public routes,
  // simply return the response from the nextIntlMiddleware
  return authMiddleware(req)
}

export const config = {
  // Match only internationalized pathnames
  // If you want to exclude some routes, you can adjust the matcher accordingly
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
