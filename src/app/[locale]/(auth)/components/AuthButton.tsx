'use client'

import { buttonVariants } from '@/components/ui/button'
import { ROUTES } from '@/constants'
import { cn } from '@/utils/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const AuthButton = () => {
  const [authLink, setAuthLink] = useState<string>('')

  const pathname = usePathname()

  useEffect(() => {
    const authLink = pathname.includes(ROUTES.auth.login) ? ROUTES.auth.register : ROUTES.auth.login
    setAuthLink(authLink)
  }, [pathname])

  const nameAuthButton = pathname.includes(ROUTES.auth.login) ? 'Sign Up' : 'Login'

  return (
    <Link href={authLink} className={cn(buttonVariants({ variant: 'default' }), '')}>
      {nameAuthButton}
    </Link>
  )
}
