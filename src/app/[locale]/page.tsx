'use client'

import { ROUTES } from '@/constants'
import { useTranslations } from 'next-intl'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

// TODO: create landing page

export default function Home() {
  const t = useTranslations('site')
  useEffect(() => {
    redirect(ROUTES.auth.login)
  }, [])
  return (
    <main className='grid min-h-screen place-items-center text-center'>
      <h1 className='dark:text-white text-black text-sm font-medium font-sans'> {t('title')}</h1>
    </main>
  )
}
