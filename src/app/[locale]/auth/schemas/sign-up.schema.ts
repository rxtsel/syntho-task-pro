import { z } from 'zod'

type MessageParams = {
  [key: string]: string | number
}

type T = (key: string, params?: MessageParams) => string

export const formSignUpSchema = (t: T) =>
  z
    .object({
      firstName: z
        .string()
        .min(3, {
          message: t('messages.minCharacters', { name: t('messages.firstName').toLowerCase(), qty: 3 })
        })
        .max(50, {
          message: t('messages.maxCharacters', { name: t('messages.firstName').toLowerCase(), qty: 50 })
        }),
      lastName: z
        .string()
        .min(3, {
          message: t('messages.minCharacters', { name: t('messages.lastName').toLowerCase(), qty: 3 })
        })
        .max(50, {
          message: t('messages.maxCharacters', { name: t('messages.lastName').toLowerCase(), qty: 50 })
        }),
      email: z.string().email({
        message: t('messages.invalidEmail')
      }),
      password: z
        .string()
        .min(6, {
          message: t('messages.minCharacters', { name: t('messages.password').toLowerCase(), qty: 6 })
        })
        .max(100, {
          message: t('messages.maxCharacters', { name: t('messages.password').toLowerCase(), qty: 100 })
        })
        .refine(
          value => {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,100}$/.test(value)
          },
          {
            message: t('messages.passwordMatch')
          }
        ),
      confirmPassword: z.string()
    })
    .refine(data => data.password === data.confirmPassword, {
      message: t('messages.passwordNotMatch'),
      path: ['confirmPassword']
    })
