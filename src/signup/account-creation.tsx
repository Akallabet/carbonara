import {Box, Typography} from '@material-ui/core'
import {useState} from 'react'
import {withContent} from '../common/providers/content-provider'
import {AccountCreationProps} from './types'

const AccountCreation = ({
  content: {
    signup: {text, steps},
  },
}: AccountCreationProps): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(steps[0])
  // const next = () => {}
  // const complete = () => {}

  return (
    <Box px={11}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" color="textSecondary">
          {text}
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
        >{`Step ${currentStep.step} of ${steps.length}`}</Typography>
      </Box>
      <Box>
        <Box key={currentStep.step}>
          <Typography
            variant="h5"
            color="textSecondary"
          >{`${currentStep.step}. ${currentStep.title}`}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default withContent(AccountCreation)
