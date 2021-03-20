import {Box, Grid, Typography} from '@material-ui/core'
import {StaticImage} from 'gatsby-plugin-image'

import {withContent} from '../common/providers/content-provider'
import {withCountries} from '../countries'
import {MainSectionProps} from './types'

const LogosSection = ({
  selectedCountry,
  content: {
    home: {
      mainSection: {trustedText},
    },
    countries: {list},
  },
}: MainSectionProps): JSX.Element => {
  const {name} = list.find(({code}) => code === selectedCountry) || {
    cities: [],
  }
  return (
    <Box position="relative" bgcolor="secondary.main">
      <Typography data-testid="trusted-text">
        <Box component="span" mr={1}>
          {trustedText}
        </Box>
        <Box component="span">{name}</Box>
      </Typography>
      <Box width="100%">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={2}>
            <Box textAlign="center">
              <StaticImage
                src="../assets/images/donne-pepe.png"
                alt="donne pepe"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box textAlign="center">
              <StaticImage
                src="../assets/images/mamma-pizza.png"
                alt="donne pepe"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box textAlign="center">
              <StaticImage
                src="../assets/images/maggie-fu.png"
                alt="donne pepe"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box textAlign="center">
              <StaticImage src="../assets/images/18B.png" alt="donne pepe" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box textAlign="center">
              <StaticImage
                src="../assets/images/mamma-pizza.png"
                alt="donne pepe"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box textAlign="center">
              <StaticImage
                src="../assets/images/donne-pepe.png"
                alt="donne pepe"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default withCountries(withContent(LogosSection))
