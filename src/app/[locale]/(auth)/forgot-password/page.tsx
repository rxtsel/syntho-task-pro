import { Metadata } from 'next'
import Link from 'next/link'

import { ForgotPasswdForm } from './components/ForgotPasswdForm'

export const metadata: Metadata = {
  title: 'Recovers your password in SyntoTask Pro',
  description: 'Recover your password in SyntoTask Pro to continue managing your tasks and projects.'
}

export default function AuthenticationPage() {
  return (
    <>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Forgot your password?</h1>
            <p className='text-sm text-muted-foreground'>Enter your email below to recover your password</p>
          </div>
          <ForgotPasswdForm />
        </div>
      </div>
    </>
  )
}
