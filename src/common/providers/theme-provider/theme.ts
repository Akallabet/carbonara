import {createMuiTheme} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F1AF00',
    },
    secondary: {
      main: '#24232D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#232d36',
    },
  },
  spacing: 5,
  overrides: {
    MuiInputBase: {
      input: {
        color: '#232d36',
      },
    },
  },
})

theme.typography.h2 = {
  fontSize: '3.5rem',
  fontFamily: '"Roboto", "Helvetica", "Arial"',
  fontWeight: 300,
  lineHeight: 1.2,
  letterSpacing: '-0.00833em',
  [theme.breakpoints.down('xs')]: {
    fontSize: '2.0rem',
  },
}

theme.typography.h4 = {
  fontSize: '2.125rem',
  fontFamily: '"Roboto", "Helvetica", "Arial"',
  fontWeight: 400,
  lineHeight: 1.235,
  letterSpacing: '0.00735em',
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.5rem',
  },
}

export default theme
