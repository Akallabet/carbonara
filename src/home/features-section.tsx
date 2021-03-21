import {Box, Grid, Typography} from '@material-ui/core'
import {GatsbyImage} from 'gatsby-plugin-image'
import {withContent} from '../common/providers/content-provider'
import {FeaturesSectionProps} from './types'

const FeaturesSection = ({
  content: {
    home: {
      featuresSection: {features},
    },
  },
}: FeaturesSectionProps): JSX.Element => {
  return (
    <>
      {features.map((row, i) => (
        <Grid container key={i}>
          {row.map(({type, ...rest}, j) => (
            <Grid item xs={12} sm={6} key={j}>
              {type === 'image' ? (
                <GatsbyImage
                  image={rest.image.src.childImageSharp.gatsbyImageData}
                  alt={rest.image.alt}
                />
              ) : (
                <Box>
                  <Typography variant="h3" color="textSecondary">
                    {rest.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {rest.description}
                  </Typography>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  )
}

export default withContent(FeaturesSection)
