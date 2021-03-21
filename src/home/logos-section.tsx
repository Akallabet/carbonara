import {Box, Grid, GridSize, Typography} from '@material-ui/core'
import {GatsbyImage} from 'gatsby-plugin-image'

import {withContent} from '../common/providers/content-provider'
import {withCountries} from '../countries'
import {LogosSectionProps} from './types'

const LogosSection = ({
  selectedCountry,
  content: {
    home: {
      logosSection: {text, logos},
    },
    countries: {list},
  },
}: LogosSectionProps): JSX.Element => {
  const {name} = list.find(({code}) => code === selectedCountry) || {
    cities: [],
  }
  const logosSpaces = (12 / logos.length) as GridSize
  return (
    <Box position="relative" bgcolor="secondary.main">
      <Typography data-testid="trusted-text">
        <Box component="span" mr={1}>
          {text}
        </Box>
        <Box component="span">{name}</Box>
      </Typography>
      <Grid container>
        {logos.map(({src, alt}) => {
          return (
            <Grid key={alt} item xs={12} sm={logosSpaces}>
              <Box textAlign="center">
                <GatsbyImage
                  image={src.childImageSharp.gatsbyImageData}
                  alt={alt}
                />
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default withCountries(withContent(LogosSection))
