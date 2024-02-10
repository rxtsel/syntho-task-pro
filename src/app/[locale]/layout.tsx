import type { Metadata } from 'next'
import '@/styles/globals.css'
import { FC } from 'react'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import type { TLanguage } from '@/types'
import { ThemeProvider } from '@/components'

export const metadata: Metadata = {
  title: {
    default: 'SyntoTask Pro',
    template: '%s · SyntoTask Pro'
  },
  icons: [
    {
      type: 'image/svg+xml',
      sizes: 'any',
      url: '/logo-dark.svg',
      href: '/logo-dark.svg',
      media: '(prefers-color-scheme: light)'
    },
    {
      type: 'image/svg+xml',
      sizes: 'any',
      url: '/logo-light.svg',
      href: '/logo-light.svg',
      media: '(prefers-color-scheme: dark)'
    }
  ]
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
