import {Box, Button, Typography} from '@material-ui/core'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Carousel, TextCarousel} from '../common/components'

import {withContent} from '../common/providers/content-provider'
import {withCountries} from '../countries'
import {MainSectionProps} from './types'

const MainSection = ({
  selectedCountry,
  content: {
    home: {
      mainSection: {backgroundImage, text, button},
    },
    countries: {list},
  },
}: MainSectionProps): JSX.Element => {
  const {cities} = list.find(({code}) => code === selectedCountry) || {
    cities: [],
  }
  return (
    <Box position="relative" data-testid="main-section">
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
            <TextCarousel interval={3000} elements={cities} />
          </Box>
        </Typography>
        <Button color="primary" variant="contained">
          {button}
        </Button>
      </Box>
    </Box>
  )
}

export default withCountries(withContent(MainSection))
