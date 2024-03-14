import { Navigate } from 'react-router-dom'

export const AuthMiddleware = props => {
  const token = true // get login status here
  const { auth = token, children, redirect = '/login' } = props

  if (!auth) return <Navigate to={redirect} replace />

  return children
}
