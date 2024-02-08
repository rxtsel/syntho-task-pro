import { useTranslations } from 'next-intl'
import { ToggleTheme } from '@/components'

export default function Home() {
  const t = useTranslations('site')
  return (
    <>
      <h1 className='dark:text-white text-black'> {t('title')}</h1>

      <ToggleTheme />
    </>
  )
}
