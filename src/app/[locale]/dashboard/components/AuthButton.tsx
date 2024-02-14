'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { ROUTES } from '@/constants'
import { Database } from '@/types/database.types'
import { cn } from '@/utils/utils'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const AuthButton = () => {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const handleClick = async () => {
    try {
      await supabase.auth.signOut()
      router.push(ROUTES.root)
      toast.success('You have been logged out.')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <Button onClick={handleClick} className={cn(buttonVariants({ variant: 'default' }), '')}>
      Logout
    </Button>
  )
}
