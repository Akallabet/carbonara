import {FunctionComponent} from 'react'
import {withContent} from '../providers/content-provider'
import {FooterProps} from './types'
import {Box, Button, Grid, Typography} from '@material-ui/core'

import facebook from './icons/facebook'
import instagram from './icons/instagram'
import linkedin from './icons/linkedin'
import youtube from './icons/youtube'
import twitter from './icons/twitter'
import {useBreakpoints} from '../hooks'
import {Link} from 'gatsby'

const socialIcons = {
  facebook,
  instagram,
  linkedin,
  youtube,
  twitter,
}

const Footer: FunctionComponent<FooterProps> = ({
  content: {
    footer: {
      copyRight,
      main,
      socialMedia,
      buttons: {signUp},
    },
  },
}: FooterProps) => {
  const {isMobile} = useBreakpoints()
  return (
    <Box
      component="footer"
      bgcolor="primary.main"
      px={5}
      py={13}
      data-testid="footer"
    >
      <Box maxWidth={1110} mx="auto">
        <Box borderBottom={1} borderColor="white" paddingBottom={8}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item xs={12} sm={3}>
              <Typography
                variant="body1"
                align={isMobile ? 'center' : 'left'}
                color="textSecondary"
              >
                {copyRight}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" align="center" color="textSecondary">
                {main}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box display="block" textAlign={isMobile ? 'center' : 'right'}>
                <Box mb={4}>
                  <Link to={signUp.href}>
                    <Button variant="contained" color="secondary">
                      {signUp.label}
                    </Button>
                  </Link>
                </Box>
                <Grid
                  container
                  spacing={2}
                  justify={isMobile ? 'center' : 'flex-end'}
                >
                  {socialMedia.map(({type}) => {
                    const Component: React.ElementType = socialIcons[type]
                    return (
                      <Grid item key={type}>
                        {' '}
                        <Component alt={type} />
                      </Grid>
                    )
                  })}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
export default withContent(Footer)
