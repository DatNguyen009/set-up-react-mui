import AuthGuard from '@/auth/auth-guard'
import MainLayout from '@/layouts/main/main-layout'
import ProductPage from '@/pages/product'
import ProductCheckoutPage from '@/pages/product/checkout'
import ProductDetailPage from '@/pages/product/detail'
import { Outlet } from 'react-router-dom'
import { paths } from '../paths'

const MainRoutes = [
  {
    element: (
      <AuthGuard>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </AuthGuard>
    ),
    children: [
      { path: paths.product.root, element: <ProductPage /> },
      { path: ':id', element: <ProductCheckoutPage /> },
      { path: paths.product.detail, element: <ProductDetailPage /> }
    ]
  }
]

export default MainRoutes
