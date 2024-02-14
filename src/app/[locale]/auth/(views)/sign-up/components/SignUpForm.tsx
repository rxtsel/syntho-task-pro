'use client'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSignUpSchema } from '../../../schemas'
import { signUp } from '@/services'
import { useToastStore } from '@/stores'
import { ROUTES } from '@/constants'
import { useRouter } from 'next/navigation'

export const SignUpForm = () => {
  const isLoading = false
  const t = useTranslations()
  const formSchema = formSignUpSchema(t)
  const router = useRouter()
  const toast = useToastStore(state => state.showToast)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values

    try {
      await signUp(email, password)
      toast({ message: `Te hemos enviado un email de confirmación a ${email}`, type: 'success' })
      router.push(ROUTES.private.dashboard)
    } catch (error) {
      console.error(error)
      toast({ message: 'Ha ocurrido un error al registrarte, por favor, intenta de nuevo.', type: 'error' })
    }
  }
  return (
    <Form {...form}>
      <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid gap-2'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' placeholder='email@example.com' autoComplete='email' {...field} />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('messages.password')}</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    autoComplete='off'
                    placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('messages.confirmPassword')}</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    autoComplete='off'
                    placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
        </div>

        <Button className='w-full' type='submit'>
          {t('buttons.auth.signUp')}
        </Button>

        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>{t('auth.orContinueWith')}</span>
          </div>
        </div>
        <Button className='w-full' variant='outline' type='button' disabled={isLoading}>
          {isLoading ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <Icons.gitHub className='mr-2 h-4 w-4' />
          )}{' '}
          GitHub
        </Button>
      </form>
    </Form>
  )
}
