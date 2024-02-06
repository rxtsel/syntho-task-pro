'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) null

  return (
    <select
      suppressHydrationWarning
      value={theme}
      onChange={e => setTheme(e.target.value)}
      className='block bg-white text-black'
    >
      <option value='system'>System</option>
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>
    </select>
  )
}
