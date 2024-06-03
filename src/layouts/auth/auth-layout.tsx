import { Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface AuthLayout {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayout) => {
  return (
    <Stack>
      <Typography color={'green'}>Auth layout</Typography>
      <div>{children}</div>
    </Stack>
  )
}

export default AuthLayout
