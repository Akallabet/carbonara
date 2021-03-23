import {Box, Button, Typography} from '@material-ui/core'
import {GatsbyImage} from 'gatsby-plugin-image'
import {TextCarousel} from '../common/components'

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
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        px={10}
      >
        <Box maxWidth={650} mb={4}>
          <Typography variant="h2">
            <Box component="span" mr={4}>
              {text}
            </Box>
            <Box component="span" fontWeight="bold">
              <TextCarousel interval={3000} elements={cities} />
            </Box>
            <Box component="span">.</Box>
          </Typography>
        </Box>
        <Box>
          <Button color="primary" variant="contained" size="large">
            {button}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default withCountries(withContent(MainSection))
