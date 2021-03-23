import {withContent} from '../common/providers/content-provider'
import {StepsProps} from './types'

const Steps = ({
  content: {
    signup: {text},
  },
}: StepsProps): JSX.Element => {
  // console.log(signup)
  return <div>{text}</div>
}

export default withContent(Steps)
