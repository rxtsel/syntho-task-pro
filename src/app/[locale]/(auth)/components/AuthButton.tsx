'use client'

import { buttonVariants } from '@/components/ui/button'
import { ROUTES } from '@/constants'
import { cn } from '@/utils/utils'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const AuthButton = () => {
  const [authLink, setAuthLink] = useState<string>('')

  const t = useTranslations('buttons.auth')
  const pathname = usePathname()

  useEffect(() => {
    const authLink = pathname.includes(ROUTES.auth.login) ? ROUTES.auth.register : ROUTES.auth.login
    setAuthLink(authLink)
  }, [pathname])

  const nameAuthButton = pathname.includes(ROUTES.auth.login) ? t('signUp') : t('signIn')

  return (
    <Link href={authLink} className={cn(buttonVariants({ variant: 'default' }), '')}>
      {nameAuthButton}
    </Link>
  )
}
