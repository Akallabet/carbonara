import {createMuiTheme} from '@material-ui/core'

export default createMuiTheme({
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
