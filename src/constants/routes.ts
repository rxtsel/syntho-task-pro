export const ROUTES = {
  root: '/',
  auth: {
    login: '/auth/sign-in',
    register: '/auth/sign-up',
    forgotPassword: '/auth/forgot-password'
  },
  private: {
    dashboard: '/dashboard'
  }
}

export const PRIVATE_ROUTES = Object.values(ROUTES.private)
