import {Box, Grid, Typography} from '@material-ui/core'
import ImageWithOverlay from '../common/components/image-with-overlay'
import {withContent} from '../common/providers/content-provider'
import {FeaturedTopicsSectionProps} from './types'

const FeaturedTopicsSection = ({
  content: {
    home: {
      featuredTopicsSection: {title, topics},
    },
  },
}: FeaturedTopicsSectionProps) => (
  <Box data-testid="featured-topics-section" py={10} px={5}>
    <Box mb={10}>
      <Typography variant="h4" color="textSecondary">
        {title}
      </Typography>
    </Box>
    <Box>
      <Grid container spacing={5}>
        {topics.map(({text, image}, i) => (
          <Grid item key={i} xs={12} sm={4}>
            <ImageWithOverlay
              image={image}
              text={<Typography variant="body1">{text}</Typography>}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
)

export default withContent(FeaturedTopicsSection)
