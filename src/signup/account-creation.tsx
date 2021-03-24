import {Box, Typography} from '@material-ui/core'
import {useState} from 'react'
import {withContent} from '../common/providers/content-provider'
import {Form} from './components'
import {AccountCreationProps} from './types'
import {register} from '../api'

const AccountCreation = ({
  content: {
    signup: {text, steps},
  },
}: AccountCreationProps): JSX.Element => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [data, setData] = useState({})
  const [submissionState, setSubmissionState] = useState({})

  const addData = (moreData: any) => setData({...data, ...moreData})

  const handleSubmit = async (values: any) => {
    addData(values)
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
    } else {
      const {success, error} = await register(data)
      if (success) setSubmissionState({success})
      if (error) setSubmissionState({error})
    }
  }
  return (
    <Box px={11}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" color="textSecondary">
          {text}
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
        >{`Step ${steps[currentStepIndex].step} of ${steps.length}`}</Typography>
      </Box>
      <Box>
        <Box key={steps[currentStepIndex].step}>
          <Typography
            variant="h5"
            color="textSecondary"
          >{`${steps[currentStepIndex].step}. ${steps[currentStepIndex].title}`}</Typography>
        </Box>
        {(submissionState.success && <Typography>Done</Typography>) ||
          steps.map(({step, ...props}) => (
            <Box
              key={step}
              display={step === currentStepIndex + 1 ? 'block' : 'none'}
            >
              <Form {...props} onSubmit={handleSubmit} />
            </Box>
          ))}
      </Box>
    </Box>
  )
}

export default withContent(AccountCreation)
