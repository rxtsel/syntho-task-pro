import { API_ROUTES } from '@/constants'
import { axiosAuthInstance } from './config'
import { AxiosResponse } from 'axios'

export const login = async (email: string, password: string) => {
  const response: AxiosResponse = await axiosAuthInstance.post(API_ROUTES.auth.login, {
    email,
    password
  })
  return response.data
}

export const signUp = async (email: string, password: string) => {
  const response: AxiosResponse = await axiosAuthInstance.post(API_ROUTES.auth.signUp, {
    email,
    password
  })

  return response.data
}
