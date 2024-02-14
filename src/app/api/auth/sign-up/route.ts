import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { Database } from '@/types/database.types'
import { ROUTES, API_ROUTES } from '@/constants'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const body = await request.json()
  const { email, password } = body

  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

  const res = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}${API_ROUTES.auth.base}${API_ROUTES.auth.callback}`
    }
  })

  if (res.error !== null) {
    return NextResponse.json({ error: res.error.message }, { status: res.error.status })
  } else {
    return NextResponse.redirect(`${requestUrl.origin}${ROUTES.auth.login}`, {
      status: 301
    })
  }
}
