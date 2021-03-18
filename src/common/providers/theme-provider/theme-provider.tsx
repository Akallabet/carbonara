import {FunctionComponent} from 'react'
import {ThemeProvider as MUIThemeProvider} from '@material-ui/styles'
import theme from './theme'
import {CssBaseline} from '@material-ui/core'

type ThemeProviderProps = {
  element: React.ReactNode
}

import './styles.css'

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  element,
}: ThemeProviderProps) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </MUIThemeProvider>
  )
}

export default ThemeProvider
