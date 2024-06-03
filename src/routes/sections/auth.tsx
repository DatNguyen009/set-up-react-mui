import AuthLayout from '@/layouts/auth/auth-layout'
import LoginPage from '@/pages/auth/login'
import RegisterPage from '@/pages/auth/register'
import { Outlet } from 'react-router-dom'
import { paths } from '../paths'

const AuthRoutes = [
  {
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: paths.auth.register,
        element: <RegisterPage />
      },
      {
        path: paths.auth.login,
        element: <LoginPage />
      }
    ]
  }
]

export default AuthRoutes
