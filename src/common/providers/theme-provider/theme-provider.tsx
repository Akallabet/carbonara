import {FunctionComponent} from 'react'
import {ThemeProvider as MUIThemeProvider} from '@material-ui/styles'
import theme from './theme'
import {CssBaseline} from '@material-ui/core'

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  return (
    <>
      <CssBaseline />
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </>
  )
}

export default ThemeProvider
