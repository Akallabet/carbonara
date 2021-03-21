import {GatsbyImage} from 'gatsby-plugin-image'
import {Box, Fade, Grid, IconButton, Typography} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import {useState} from 'react'
import {withContent} from '../common/providers/content-provider'
import {useBreakpoints, useTimeout} from '../common/hooks'
import {ReviewSectionProps} from './types'

const ReviewSection = ({
  content: {
    home: {
      reviewSection: {reviews},
    },
  },
}: ReviewSectionProps): JSX.Element => {
  const [active, setActive] = useState(0)
  const next = () => setActive(active === reviews.length - 1 ? 0 : active + 1)
  const prev = () => setActive(active === 0 ? reviews.length - 1 : active - 1)

  useTimeout(next, 20000, active)

  const {isGreaterThanMobile} = useBreakpoints()

  return (
    <Box width="100%" position="relative" overflow="hidden">
      <Box
        position="absolute"
        zIndex={999}
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
      >
        <IconButton onClick={prev}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton onClick={next}>
          <ChevronRightIcon />
        </IconButton>
      </Box>
      {reviews.map(({text, image: {src, alt}}, i) => (
        <Fade in={i === active} key={alt}>
          <Box
            position={i === active ? 'relative' : 'absolute'}
            data-testid={`carousel-${i}`}
          >
            {isGreaterThanMobile ? (
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h3" color="textSecondary">
                    {text}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <GatsbyImage
                    image={src.childImageSharp.gatsbyImageData}
                    alt={alt}
                  />
                </Grid>
              </Grid>
            ) : (
              <Box position="relative">
                <GatsbyImage
                  image={src.childImageSharp.gatsbyImageData}
                  alt={alt}
                />
                <Box position="absolute" left={0} bottom={0}>
                  <Typography variant="h3" color="textSecondary">
                    {text}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Fade>
      ))}
    </Box>
  )
}

export default withContent(ReviewSection)
