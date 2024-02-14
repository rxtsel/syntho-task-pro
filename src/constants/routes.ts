export const ROUTES = {
  root: '/',
  auth: {
    auth: '/auth',
    login: '/auth/login',
    register: '/auth/sign-up',
    forgotPassword: '/auth/forgot-password'
  },
  private: {
    dashboard: '/dashboard'
  }
}

export const PRIVATE_ROUTES = Object.values(ROUTES.private)

export const API_ROUTES = {
  auth: {
    base: '/api/auth',
    login: '/login',
    signUp: '/sign-up',
    logout: '/logout',
    forgotPassword: '/forgot-password',
    callback: '/callback'
  }
}
