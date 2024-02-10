import { ToggleTheme } from '@/components'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/utils'
import Link from 'next/link'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const layout = (props: Props) => {
  const { children } = props
  return (
    <>
      <header className='flex items-center justify-between mt-8 mx-8'>
        <a href='/' className='flex items-center text-lg font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-6 w-6'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
          SyntoTask Pro
        </a>

        <div className='flex items-center'>
          <ToggleTheme />
          <Link href='#' className={cn(buttonVariants({ variant: 'ghost' }), '')}>
            Login
          </Link>
        </div>
      </header>
      <main className='container relative min-h-[calc(100dvh-172px)] grid place-items-center lg:max-w-none lg:px-0'>
        {children}
      </main>
    </>
  )
}

export default layout
