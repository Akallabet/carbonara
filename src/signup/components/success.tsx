import {Box, Typography} from '@material-ui/core'
import {withContent} from '../../common/providers/content-provider'
import {SuccessProps} from './types'

const Success = ({
  content: {
    signup: {
      successPage: {title, firstParagraph, secondParagraph},
    },
  },
}: SuccessProps): JSX.Element => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    height="100%"
    maxWidth={600}
  >
    <Box mb={5}>
      <Typography variant="h3" color="textSecondary">
        {title}
      </Typography>
    </Box>
    <Box mb={5}>
      <Typography variant="h5" color="textSecondary">
        {firstParagraph}
      </Typography>
    </Box>
    <Box mb={5}>
      <Typography variant="h5" color="textSecondary">
        {secondParagraph}
      </Typography>
    </Box>
  </Box>
)

export default withContent(Success)
