import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from '@/types/database.types'

const Dashboard = async () => {
  const cookieStore = cookies()
  const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })
  const { data } = await supabase.from('users').select()
  return (
    <>
      <h1 className='dark:text-white text-black text-2xl lg:text-6xl font-medium font-sans'>Welcome Back! 🌟</h1>

      <h2 className='dark:text-white text-black text-2xl font-sans my-5'>Your data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <strong className='mt-5 lg:mt-10 block'>
        This project is currently a work in progress. Please check back later for updates. Thank you! ✌️
      </strong>
    </>
  )
}

export default Dashboard
