import {Box, Button, Grid, Typography} from '@material-ui/core'
import {GatsbyImage} from 'gatsby-plugin-image'
import {withContent} from '../common/providers/content-provider'
import {FindOutProps} from './types'

const FindOutSection = ({
  content: {
    home: {
      findOutSection: {square1, square2},
    },
  },
}: FindOutProps): JSX.Element => (
  <Box>
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Box position="relative" width="100%" height="100%">
          <GatsbyImage
            image={square1.image.src.childImageSharp.gatsbyImageData}
            alt={square1.image.alt}
          />
          <Box
            position="absolute"
            width="100%"
            height="100%"
            top={0}
            left={0}
            display="flex"
            alignItems="center"
          >
            <Box maxWidth={300} marginX="auto" textAlign="center">
              <Typography variant="h4">{square1.text}</Typography>
              <Button variant="outlined" color="primary">
                {square2.button}
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box position="relative" width="100%" height="100%">
          <GatsbyImage
            image={square2.image.src.childImageSharp.gatsbyImageData}
            alt={square2.image.alt}
          />
          <Box
            position="absolute"
            width="100%"
            height="100%"
            top={0}
            left={0}
            display="flex"
            alignItems="center"
          >
            <Box maxWidth={300} marginX="auto" textAlign="center">
              <Typography variant="h4">{square2.text}</Typography>
              <Button variant="outlined" color="primary">
                {square2.button}
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
)

export default withContent(FindOutSection)
