'use client'

import { NavDashboard } from '@/components'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navItems } from '@/constants'
import { AlignLeft } from 'lucide-react'
import { useState } from 'react'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MobileSidebar: React.FC<SidebarProps> = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className='cursor-pointer'>
          <AlignLeft size={24} />
        </SheetTrigger>
        <SheetContent side='left' className='!px-0'>
          <div className='space-y-4 py-4'>
            <div className='px-3 py-2'>
              <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>Overview</h2>
              <div className='space-y-1'>
                <NavDashboard items={navItems} setOpen={setOpen} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
