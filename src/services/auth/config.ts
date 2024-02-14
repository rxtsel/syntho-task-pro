import { API_ROUTES } from '@/constants'
import axios from 'axios'

export const axiosAuthInstance = axios.create({
  baseURL: API_ROUTES.auth.base
})
