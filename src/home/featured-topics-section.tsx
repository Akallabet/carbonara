import {Box, Grid, Typography} from '@material-ui/core'
import {GatsbyImage} from 'gatsby-plugin-image'
import {withContent} from '../common/providers/content-provider'
import {FeaturedTopicsSectionProps} from './types'

const FeaturedTopicsSection = ({
  content: {
    home: {
      featuredTopicsSection: {title, topics},
    },
  },
}: FeaturedTopicsSectionProps) => (
  <Box data-testid="featured-topics-section">
    <Box>
      <Typography variant="h3">{title}</Typography>
    </Box>
    <Box>
      <Grid container spacing={5}>
        {topics.map(({text, image}, i) => (
          <Grid item key={i} xs={12} sm={4}>
            <Box position="relative">
              <GatsbyImage
                image={image.src.childImageSharp.gatsbyImageData}
                alt={image.alt}
              />
              <Box position="absolute" bottom={0} width="100%">
                <Typography variant="body1">{text}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
)

export default withContent(FeaturedTopicsSection)
