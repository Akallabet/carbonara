import {Box, Button, Grid, Typography} from '@material-ui/core'
import {GatsbyImage, StaticImage} from 'gatsby-plugin-image'

import {withContent} from '../common/providers/content-provider'
import {withCountries} from '../countries'
import CityRoll from './city-roll'
import {MainSectionProps} from './types'

const MainSection = ({
  selectedCountry,
  content: {
    home: {
      mainSection: {backgroundImage, text, trustedText},
    },
    countries: {list},
  },
}: MainSectionProps): JSX.Element => {
  const {name, cities} = list.find(({code}) => code === selectedCountry) || {
    cities: [],
  }
  return (
    <Box position="relative">
      <GatsbyImage
        image={backgroundImage.src.childImageSharp.gatsbyImageData}
        alt={backgroundImage.alt}
      />
      <Box position="absolute" top={0} left={0} width="100%" height="100%">
        <Typography>
          <Box component="span" mr={1}>
            {text}
          </Box>
          <Box component="span">
            <CityRoll cities={cities} />
          </Box>
        </Typography>
        <Button color="primary" variant="contained">
          Get started
        </Button>
      </Box>
      {/* <Box position="absolute" bottom={0} left={0} width="100%">
        <Typography data-testid="trusted-text">
          <Box component="span" mr={1}>
            {trustedText}
          </Box>
          <Box component="span">{name}</Box>
        </Typography>
        <Box width="100%">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={2}>
              <StaticImage
                src="../assets/images/donne-pepe.png"
                alt="donne pepe"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <StaticImage
                src="../assets/images/mamma-pizza.png"
                alt="donne pepe"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <StaticImage
                src="../assets/images/maggie-fu.png"
                alt="donne pepe"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <StaticImage src="../assets/images/18B.png" alt="donne pepe" />
            </Grid>
            <Grid item xs={12} sm={2}>
              <StaticImage
                src="../assets/images/mamma-pizza.png"
                alt="donne pepe"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <StaticImage
                src="../assets/images/donne-pepe.png"
                alt="donne pepe"
              />
            </Grid>
          </Grid>
        </Box>
      </Box> */}
    </Box>
  )
}

export default withCountries(withContent(MainSection))
