/* eslint-disable react-hooks/exhaustive-deps */
import { paths } from '@/routes/paths'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthGuardProp {
  children: ReactNode
}

const AuthGuard = ({ children }: AuthGuardProp) => {
  return <Container>{children}</Container>
}

export default AuthGuard

const Container = ({ children }: AuthGuardProp) => {
  const navigate = useNavigate()

  const [checked, setChecked] = useState(false)

  const authenticated = true

  const check = useCallback(() => {
    if (!authenticated) {
      const searchParams = new URLSearchParams({
        returnTo: window.location.pathname
      }).toString()

      const href = `${paths.auth.login}?${searchParams}`
      navigate(href, { replace: true })
      return
    }
    setChecked(true)
  }, [authenticated])

  useEffect(() => {
    check()
  }, [])

  if (!checked) {
    return null
  }

  return <>{children}</>
}
