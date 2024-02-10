import { Metadata } from 'next'
import Link from 'next/link'

import { SignInForm } from './components/SignInForm'
import { ROUTES } from '@/constants'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Create an account in SyntoTask Pro to start managing your tasks and projects.'
}

export default function AuthenticationPage() {
  const t = useTranslations()
  return (
    <>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>{t('auth.signIn.title')}</h1>
            <p className='text-sm text-muted-foreground'>{t('auth.signIn.desc')}</p>
          </div>
          <SignInForm />
          <div className='px-0 text-sm text-right'>
            <Link
              href={ROUTES.auth.forgotPassword}
              className='underline underline-offset-4 hover:text-primary text-muted-foreground'
            >
              {t('buttons.auth.forgotPassword')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
