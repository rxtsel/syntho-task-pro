import { z } from 'zod'

type MessageParams = {
  [key: string]: string | number
}

type T = (key: string, params?: MessageParams) => string

export const formSignInSchema = (t: T) =>
  z.object({
    email: z.string().email({
      message: t('messages.invalidEmail')
    }),
    password: z.string().min(2, { message: t('messages.passwordRequired') })
  })
