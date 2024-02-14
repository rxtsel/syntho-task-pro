import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from '@/types/database.types'

const Dashboard = async () => {
  const cookieStore = cookies()
  const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })
  const { data } = await supabase.from('users').select()
  return (
    <main className='grid min-h-screen place-items-center text-center'>
      <h1 className='dark:text-white text-black text-sm font-medium font-sans'>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}

export default Dashboard
