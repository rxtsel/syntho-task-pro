import { LocaleSwitcher, ToggleTheme } from '@/components'
import { useTranslations } from 'next-intl'
import { AuthButton } from './components'
import { ROUTES } from '@/constants'

const Home = () => {
  const t = useTranslations('site')
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
      <main className='grid min-h-[70vh] place-items-center text-center'>
        <h1 className='dark:text-white text-black text-sm font-medium font-sans'> {t('title')}</h1>
      </main>
    </>
  )
}

export default Home
