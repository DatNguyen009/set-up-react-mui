import { Button } from '@mui/material'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  StyledEngineProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme
} from '@mui/material/styles'
import { ReactNode } from 'react'
import { Palette } from './palette'
import { Shadows } from './shadows'
import Typography from './typography'

interface IThemeProvider {
  children: ReactNode
}

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme()

  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

const ThemeProvider = ({ children }: IThemeProvider) => {
  const value = {
    ...Palette(),
    typography: Typography(),
    customShadow: Shadows()
  }
  const theme = extendTheme(value)

  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={theme}>
        <ModeToggle />
        {children}
      </CssVarsProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
