import AuthGuard from '@/auth/auth-guard'
import MainLayout from '@/layouts/main/main-layout'
import DashboardPage from '@/pages/dashboard'
import { Navigate, useRoutes } from 'react-router-dom'
import AuthRoutes from './auth'
import MainRoutes from './main'

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout>
            <DashboardPage />
          </MainLayout>
        </AuthGuard>
      )
    },
    ...MainRoutes,
    ...AuthRoutes,
    { path: '*', element: <Navigate to='/404' replace /> }
  ])
}
