'use client'

import * as React from 'react'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSignInSchema } from '../../../schemas'
import { toast } from 'sonner'
import { login } from '@/services'
import { AxiosError } from 'axios'

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const t = useTranslations()
  const router = useRouter()

  const formSchema = formSignInSchema(t)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values
    try {
      setIsLoading(true)
      toast.loading('Loading...')
      await login(email, password)
      toast.success('Welcome back!')
      router.refresh()
    } catch (error: AxiosError | any) {
      setIsLoading(true)
      toast.error(error.code)
    } finally {
      toast.dismiss()
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='grid gap-2'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    autoFocus
                    id='email'
                    placeholder='name@example.com'
                    type='email'
                    autoCapitalize='none'
                    autoComplete='email'
                    autoCorrect='off'
                    {...field}
                  />
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
                    id='password'
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

        <Button disabled={isLoading} className='w-full'>
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          {t('buttons.auth.signInWithEmail')}
        </Button>

        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>{t('auth.orContinueWith')}</span>
          </div>
        </div>

        <Button variant='outline' type='button' disabled={isLoading} className='w-full'>
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
