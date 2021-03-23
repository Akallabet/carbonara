import {Box, Button, Typography} from '@material-ui/core'
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
  <Box
    data-testid="marketing-section"
    bgcolor="secondary.main"
    width="100%"
    height="100%"
    display="flex"
    flexDirection="column"
    alignItems="center"
    p={5}
  >
    <Box mb={5}>
      <Typography variant="h4">{title}</Typography>
    </Box>
    <Box mb={8} maxWidth={600} textAlign="center">
      <Typography variant="body1">{description}</Typography>
    </Box>
    <Box mb={3}>
      <Typography variant="h4">{highlightText}</Typography>
    </Box>
    <Box mb={3}>
      <Typography variant="body1">{sub1}</Typography>
    </Box>
    <Box mb={3}>
      <Typography variant="body1">{sub2}</Typography>
    </Box>
    <Link to={button.href}>
      <Button color="primary" variant="contained">
        {button.label}
      </Button>
    </Link>
  </Box>
)

export default withContent(MarketingSection)
