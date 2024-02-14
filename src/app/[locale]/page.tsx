import { useTranslations } from 'next-intl'

const Home = () => {
  const t = useTranslations('site')
  return (
    <main className='grid min-h-screen place-items-center text-center'>
      <h1 className='dark:text-white text-black text-sm font-medium font-sans'> {t('title')}</h1>
    </main>
  )
}

export default Home
