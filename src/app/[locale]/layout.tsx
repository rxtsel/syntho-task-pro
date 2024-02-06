import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FC } from 'react'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { ThemeProvider } from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SynthoTask Pro'
}

// intl
interface Props {
  children: React.ReactNode
  params: {
    locale: 'en' | 'es'
  }
}

const RootLayout: FC<Props> = ({ children, params: { locale } }) => {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className={inter.className}>
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
