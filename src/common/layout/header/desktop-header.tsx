import {FunctionComponent} from 'react'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import {Box, Button, Grid, useMediaQuery, useTheme} from '@material-ui/core'
import {HeaderContent} from './types'

const DesktopHeader: FunctionComponent<HeaderContent> = ({
  logo: {altText},
  nav: {
    links,
    buttons: {diners, signUp},
  },
}: HeaderContent) => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      display="flex"
      paddingX={5}
      paddingY={2}
      data-testid="desktop"
      justifyContent="space-between"
    >
      <Box flexGrow={0} flexShrink={0}>
        <Link to="/">
          <StaticImage src="../../../assets/images/logo.png" alt={altText} />
        </Link>
      </Box>
      <Grid
        container
        spacing={2}
        justify="flex-end"
        alignItems="center"
        component="nav"
      >
        {links.map(({label, url}) => (
          <Grid item key={label}>
            <a href={url}>{label}</a>
          </Grid>
        ))}
        <Grid item>
          <Button
            color="secondary"
            variant="outlined"
            size={isTablet ? 'small' : 'medium'}
          >
            {diners}
          </Button>
        </Grid>
        <Grid item>
          <Link to="/signup">
            <Button
              color="primary"
              variant="contained"
              size={isTablet ? 'small' : 'medium'}
            >
              {signUp}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DesktopHeader
