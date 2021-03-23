import {Box, Typography} from '@material-ui/core'

import {withContent} from '../common/providers/content-provider'
import {ReviewSectionProps} from './types'
import {Carousel} from '../common/components'
import ImageWithOverlay from '../common/components/image-with-overlay'

const MobileReviewSection = ({
  content: {
    home: {
      reviewSection: {reviews},
    },
  },
}: ReviewSectionProps): JSX.Element => {
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
        elements={reviews.map(({text, image}, i) => (
          <ImageWithOverlay
            key={i}
            image={image}
            text={<Typography variant="h4">{`"${text}"`}</Typography>}
          />
        ))}
      />
    </Box>
  )
}

export default withContent(MobileReviewSection)
