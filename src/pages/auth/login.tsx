import { paths } from '@/routes/paths'
import { useAuthStore } from '@/stores/auth.store'
import { Button } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const logIn = useAuthStore((state) => state.logIn)

  const returnTo = searchParams.get('returnTo')

  const handleLogin = async () => {
    await logIn()
    navigate(returnTo || paths.root)
  }
  return (
    <div>
      LoginPage
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default LoginPage
