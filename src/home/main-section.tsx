import {Box, Typography} from '@material-ui/core'
import {GatsbyImage} from 'gatsby-plugin-image'

import {withContent} from '../common/providers/content-provider'
import CityRoll from './city-roll'
import {MainSectionProps} from './types'

const MainSection = ({
  content: {
    home: {
      mainSection: {backgroundImage, text},
    },
    countries: {list},
  },
}: MainSectionProps): JSX.Element => {
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
            <CityRoll list={list} />
          </Box>
        </Typography>
      </Box>
    </Box>
  )
}

export default withContent(MainSection)
