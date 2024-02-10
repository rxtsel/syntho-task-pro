import { useTranslations } from 'next-intl'

export const Footer = () => {
  const t = useTranslations()
  return (
    <footer className='w-full text-center mt-14 text-sm text-muted-foreground'>
      <p>
        &copy; 2022 - {new Date().getFullYear()}.{' '}
        {t.rich('footer', {
          hear: () => <span>&hearts;</span>,
          rxtsel: chunks => (
            <a href='https://rxtsel.dev' target='_blank' className='hover:text-black transition-colors duration-150'>
              {chunks}
            </a>
          )
        })}
      </p>
    </footer>
  )
}
