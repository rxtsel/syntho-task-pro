import type { Metadata } from 'next'
import './globals.css'
import { FC } from 'react'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import type { TLanguage } from '@/types'
import { ThemeProvider } from '../components/ThemeProvider'

export const metadata: Metadata = {
  title: 'SynthoTask Pro'
}

// intl
interface Props {
  children: React.ReactNode
  params: {
    locale: TLanguage
  }
}

const RootLayout: FC<Props> = ({ children, params: { locale } }) => {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
