'use client'

import { ROUTES } from '@/constants'
import { Database } from '@/types/database.types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const LogoutButton = () => {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const handleClick = async () => {
    try {
      await supabase.auth.signOut()
      router.push(ROUTES.auth.login)
      toast.success('You have been logged out.')
    } catch (error: any) {
      toast.error(error.response.data.error)
    }
  }

  return (
    <button onClick={handleClick} className='w-full h-full text-left'>
      Logout
    </button>
  )
}
