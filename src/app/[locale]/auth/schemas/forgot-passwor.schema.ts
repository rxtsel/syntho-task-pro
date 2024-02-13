import { z } from 'zod'

type MessageParams = {
  [key: string]: string | number
}

type T = (key: string, params?: MessageParams) => string

export const formForgotPasswordpSchema = (t: T) =>
  z.object({
    email: z.string().email({
      message: t('messages.invalidEmail')
    })
  })
