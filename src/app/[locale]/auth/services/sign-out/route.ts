import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { Database } from '@/types/database.types'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const body = await request.json()

  console.log('body', body)

  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

  // await supabase.auth.signUp({
  //   email,
  //   password,
  //   options: {
  //     emailRedirectTo: `${requestUrl.origin}/auth/callback`
  //   }
  // })

  return NextResponse.redirect(requestUrl.origin, {
    status: 301
  })
}
