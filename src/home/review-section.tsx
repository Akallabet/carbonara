import {GatsbyImage} from 'gatsby-plugin-image'
import {Box, Grid, Typography} from '@material-ui/core'

import {withContent} from '../common/providers/content-provider'
import {useBreakpoints} from '../common/hooks'
import {ReviewSectionProps} from './types'
import {Carousel} from '../common/components'
import ImageWithOverlay from '../common/components/image-with-overlay'

const ReviewSection = ({
  content: {
    home: {
      reviewSection: {reviews},
    },
  },
}: ReviewSectionProps): JSX.Element => {
  const {isGreaterThanMobile} = useBreakpoints()

  return (
    <Box
      width="100%"
      position="relative"
      overflow="hidden"
      data-testid="review-section"
    >
      <Carousel
        interval={20000}
        commands={true}
        elements={reviews.map(({text, image}, i) =>
          isGreaterThanMobile ? (
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h3" color="textSecondary">
                  {text}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <GatsbyImage
                  image={image.src.childImageSharp.gatsbyImageData}
                  alt={image.alt}
                />
              </Grid>
            </Grid>
          ) : (
            <ImageWithOverlay
              image={image}
              text={<Typography variant="h4">{text}</Typography>}
            />
          ),
        )}
      />
    </Box>
  )
}

export default withContent(ReviewSection)
