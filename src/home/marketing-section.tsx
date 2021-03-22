import {Box, Button, Grid, Typography} from '@material-ui/core'
import {Link} from 'gatsby'
import {withContent} from '../common/providers/content-provider'
import {MarketingSectionProps} from './types'

const MarketingSection = ({
  content: {
    home: {
      marketingSection: {title, description, highlightText, sub1, sub2, button},
    },
  },
}: MarketingSectionProps): JSX.Element => (
  <Box data-testid="marketing-section" bgcolor="secondary.main">
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{description}</Typography>
        </Grid>
      </Grid>
    </Box>
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">{highlightText}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{sub1}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{sub2}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to={button.href}>
            <Button color="primary" variant="contained">
              {button.label}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  </Box>
)

export default withContent(MarketingSection)
