import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from '@/types/database.types'
import { LogoutButton } from './logout-button'
import { toast } from 'sonner'

export const UserNav = async () => {
  const cookieStore = cookies()
  const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })
  const { data: dataSession } = await supabase.auth.getSession()

  if (!dataSession.session) return toast.error('You are not logged in')

  const { data } = await supabase.from('users').select().eq('id', dataSession.session.user.id)

  if (!data) return toast.error('User not found')

  const { email, avatar_url, name, user_name } = data[0] as Database['public']['Tables']['users']['Row']

  const nameController = user_name ? user_name : name ? name : email ? email.split('@')[0] : 'User'
  const avatarController = avatar_url ? avatar_url : name ? name.charAt(0) : email?.charAt(0)

  if (dataSession.session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src={avatarController} alt={avatarController} />
              <AvatarFallback>{avatarController}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end' forceMount>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm font-medium leading-none'>{nameController}</p>
              <p className='text-xs leading-none text-muted-foreground'>{email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className='cursor-pointer'>Profile</DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
}
