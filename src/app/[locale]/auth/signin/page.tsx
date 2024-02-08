import { Metadata } from 'next'
import Link from 'next/link'

import { SignInForm } from './components/SignInForm'

export const metadata: Metadata = {
  title: 'login to SyntoTask Pro',
  description: 'Create an account in SyntoTask Pro to start managing your tasks and projects.'
}

export default function AuthenticationPage() {
  return (
    <>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Welcome to SyntoTask Pro</h1>
            <p className='text-sm text-muted-foreground'>Enter your email below to log in to your account</p>
          </div>
          <SignInForm />
          <div className='px-0 text-sm text-right'>
            <Link href='#' className='underline underline-offset-4 hover:text-primary text-muted-foreground'>
              Forgot your password?
            </Link>{' '}
          </div>
        </div>
      </div>
    </>
  )
}
