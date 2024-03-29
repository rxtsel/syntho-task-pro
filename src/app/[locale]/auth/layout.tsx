import { Footer, LocaleSwitcher, ToggleTheme } from '@/components'
import { ROUTES } from '@/constants'
import { AuthButton } from './components'

interface Props {
  children: React.ReactNode
}

const layout = (props: Props) => {
  const { children } = props

  return (
    <>
      <header className='flex items-center justify-between my-8 mx-8'>
        <a href={ROUTES.root} className='flex items-center text-lg font-medium'>
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
          <span className='hidden md:block'>SyntoTask Pro</span>
        </a>

        <div className='flex items-center gap-2'>
          <LocaleSwitcher />
          <ToggleTheme />
          <AuthButton />
        </div>
      </header>
      <main className='container relative min-h-[calc(100dvh-192px)] grid place-items-center lg:max-w-none lg:px-0'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default layout
