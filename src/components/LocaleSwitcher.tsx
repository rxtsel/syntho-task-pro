'use client'

import { usePathname, useRouter } from '@/config'
import { LANGUAGES } from '@/constants'
import { LanguagesIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export const LocaleSwitcher = () => {
  const [mounted, setMounted] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleClickLang = (lang: string) => {
    router.push(pathname, { locale: lang })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='select-none outline-none border-none'>
        <Button variant='ghost' size='icon'>
          <LanguagesIcon size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {Object.entries(LANGUAGES).map(([lang, name]) => (
            <DropdownMenuItem key={crypto.randomUUID()} onClick={() => handleClickLang(lang)}>
              <span>{name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
