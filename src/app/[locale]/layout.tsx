import { ThemeProvider } from '@/components'
import { ClientProviders } from '@/config'
import '@/styles/globals.css'
import type { TLanguage } from '@/types'
import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { FC } from 'react'
import { Toaster } from 'sonner'

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
            <ClientProviders>{children}</ClientProviders>
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
