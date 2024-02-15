import { useQuery } from '@tanstack/react-query'

export const useAuth = () => {
  const authQuery = useQuery({
    queryKey: ['user']
    // queryFn: signUp('email@email.com', 'saotneuhsoaeh')
  })

  return {
    authQuery
  }
}
