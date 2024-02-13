import { create } from 'zustand'
import { toast } from 'sonner'

interface ToastStore {
  showToast: (params: ToastParams) => void
}

type ToastType = 'success' | 'error' | 'promise'
enum ToastEnum {
  success = 'success',
  error = 'error',
  promise = 'promise'
}

interface ToastParams {
  message: string
  type: ToastType
  url?: string
  loadingMessage?: string
  successMessage?: string
  errorMessage?: string
}

const duration = 5000

const style = (type: ToastType) => {
  if (type === ToastEnum.success) return 'toast-success'
  if (type === ToastEnum.error) return 'toast-error'
  if (type === ToastEnum.promise) return 'toast-promise'

  return 'toast-success'
}

export const useToastStore = create<ToastStore>(() => {
  const showToast = ({ message, type, url, loadingMessage, successMessage, errorMessage }: ToastParams) => {
    const toastConfig = {
      duration,
      id: crypto.randomUUID(),
      className: style(type)
    }

    type ToastHandler = () => void

    const toastTypeHandlers: Record<ToastType, ToastHandler> = {
      success: () => toast.success(message, toastConfig),
      error: () => toast.error(message, toastConfig),
      promise: () => {
        if (url) {
          toast.promise(fetch(url), {
            loading: loadingMessage,
            success: successMessage,
            error: errorMessage
          })
        }
      }
    }

    const handler = toastTypeHandlers[type]
    if (handler) handler()
  }

  return {
    showToast
  }
})
