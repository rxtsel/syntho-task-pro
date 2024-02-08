'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { Moon, Sun, SunMoon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const iconSize = 16
  const icon =
    theme === 'dark' ? (
      <Moon size={iconSize} />
    ) : theme === 'system' ? (
      <SunMoon size={iconSize} />
    ) : (
      <Sun size={iconSize} />
    )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='select-none outline-none border-none'>
        <Button variant='ghost' size='icon'>
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('light')}>
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
