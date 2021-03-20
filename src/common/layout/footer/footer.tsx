import {FunctionComponent} from 'react'
import {withContent} from '../../providers/content-provider'
import {FooterProps} from './types'
import {Box, Grid, Typography} from '@material-ui/core'

import facebook from './icons/facebook'
import instagram from './icons/instagram'
import linkedin from './icons/linkedin'
import youtube from './icons/youtube'
import twitter from './icons/twitter'
import {useBreakpoints} from '../../hooks'

const socialIcons = {
  facebook,
  instagram,
  linkedin,
  youtube,
  twitter,
}

const Footer: FunctionComponent<FooterProps> = ({
  content: {
    footer: {copyRight, main, socialMedia},
  },
}: FooterProps) => {
  const {isMobile} = useBreakpoints()
  return (
    <Box component="footer" bgcolor="primary.main" px={5} py={13}>
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
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
export default withContent(Footer)
