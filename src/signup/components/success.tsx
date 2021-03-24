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
  <Box>
    <Box>
      <Typography variant="h3" color="textSecondary">
        {title}
      </Typography>
    </Box>
    <Box>
      <Typography variant="body1" color="textSecondary">
        {firstParagraph}
      </Typography>
    </Box>
    <Box>
      <Typography variant="body1" color="textSecondary">
        {secondParagraph}
      </Typography>
    </Box>
  </Box>
)

export default withContent(Success)
