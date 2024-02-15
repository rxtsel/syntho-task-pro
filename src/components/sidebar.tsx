import { navItems } from '@/constants'
import { NavDashboard } from './'

export const Sidebar = () => {
  return (
    <nav className='relative hidden h-[100dvh] border-r pt-16 lg:block w-72'>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <div className='space-y-1'>
            <h2 className='mb-2 px-4 text-xl font-semibold tracking-tight'>Overview</h2>
            <NavDashboard items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  )
}
