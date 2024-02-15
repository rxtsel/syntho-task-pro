import { Footer, Sidebar } from '@/components'
import { Header } from './components/header'

interface Props {
  children: React.ReactNode
}

const layout = (props: Props) => {
  const { children } = props

  return (
    <>
      <Header />
      <main className='min-h-[100dvh] max-h-[100dvh] overflow-hidden lg:max-w-none lg:px-0 lg:grid lg:grid-cols-[288px,1fr]'>
        <Sidebar />
        <div className='h-full w-full relative top-10 lg:top-16 py-10 px-4 lg:p-10'>{children}</div>
      </main>
      <Footer className='m-0 p-0 absolute bottom-0 lg:bottom-4' />
    </>
  )
}

export default layout
