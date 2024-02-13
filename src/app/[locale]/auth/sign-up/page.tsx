import { Metadata } from 'next'
import Link from 'next/link'

import { useTranslations } from 'next-intl'
import { SignUpForm } from './components/SignUpForm'

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create an account in SyntoTask Pro to start managing your tasks and projects.'
}

export default function AuthenticationPage() {
  const t = useTranslations()
  return (
    <>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>{t('auth.signUp.title')}</h1>
            <p className='text-sm text-muted-foreground'>{t('auth.signUp.desc')}</p>
          </div>
          <SignUpForm />

          <p className='px-8 text-center text-sm text-muted-foreground'>
            {t.rich('auth.policies', {
              terms: chunks => (
                <Link href='#' className='underline underline-offset-4 hover:text-primary'>
                  {chunks}
                </Link>
              ),
              privacy: chunks => (
                <Link href='#' className='underline underline-offset-4 hover:text-primary'>
                  {chunks}
                </Link>
              )
            })}
          </p>
        </div>
      </div>
    </>
  )
}
