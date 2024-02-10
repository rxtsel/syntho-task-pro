import { KEYS_OF_LANGUAGES } from '@/constants'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const locales = KEYS_OF_LANGUAGES
export const localePrefix = 'as-needed'

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales, localePrefix })
