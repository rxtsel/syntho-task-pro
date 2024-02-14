'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

interface ClientProvidersProps {
  children: React.ReactNode
}

export const ClientProviders: React.FC<ClientProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools client={queryClient} buttonPosition='bottom-left' />
      {children}
    </QueryClientProvider>
  )
}
