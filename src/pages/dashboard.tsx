import { paths } from '@/routes/paths'
import { useAuthStore } from '@/stores/auth.store'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
  const navigate = useNavigate()
  const logOut = useAuthStore((state) => state.logOut)

  const handleLogout = async () => {
    await logOut()
    navigate(paths.auth.login)
  }
  return (
    <div>
      <Typography variant='caption1'>Test font</Typography>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default DashboardPage
