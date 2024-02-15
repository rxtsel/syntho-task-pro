import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from '@/types/database.types'

const Dashboard = async () => {
  const cookieStore = cookies()
  const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })
  const { data } = await supabase.from('workspaces').select()
  return (
    <>
      <h1 className='dark:text-white text-black text-6xl font-medium font-sans'>Welcome Back</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default Dashboard
