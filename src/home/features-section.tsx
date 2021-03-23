import {Box, Grid, Typography} from '@material-ui/core'
import {GatsbyImage} from 'gatsby-plugin-image'
import {rest} from 'msw'
import {TitleAndDescription} from '../common/components'
import ImageWithOverlay from '../common/components/image-with-overlay'
import {useBreakpoints} from '../common/hooks'
import {withContent} from '../common/providers/content-provider'
import {FeaturesSectionProps} from './types'

const FeaturesSection = ({
  content: {
    home: {
      featuresSection: {features},
    },
  },
}: FeaturesSectionProps): JSX.Element => {
  const {isMobile} = useBreakpoints()
  return (
    <div data-testid="features-section">
      {features.map((row, i) => (
        <Grid container key={i}>
          {isMobile ? (
            <Grid item xs={12}>
              <ImageWithOverlay
                image={row.image}
                text={
                  <Box>
                    <Box mb={5} fontWeight="bold">
                      <Typography variant="h4">{row.text.title}</Typography>
                    </Box>
                    <Typography variant="body1">
                      {row.text.description}
                    </Typography>
                  </Box>
                }
              />
            </Grid>
          ) : (
            Object.values(row)
              .sort((a, b) => a.position - b.position)
              .map((info, j) => (
                <Grid item xs={12} sm={6} key={j}>
                  {info.src ? (
                    <GatsbyImage
                      image={info.src.childImageSharp.gatsbyImageData}
                      alt={info.alt}
                    />
                  ) : (
                    <TitleAndDescription
                      title={info.title}
                      description={info.description}
                    />
                  )}
                </Grid>
              ))
          )}
        </Grid>
      ))}
    </div>
  )
}

export default withContent(FeaturesSection)
