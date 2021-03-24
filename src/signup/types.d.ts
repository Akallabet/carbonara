import {GridSize} from '@material-ui/core'
import {
  CustomPhoneFieldProps,
  CustomSelectFieldProps,
  CustomTextFieldProps,
} from './form/types'

export interface FormRowProps {
  type: string
  width: GridSize
  validation?: string
}

export interface AccountCreationProps {
  content: {
    signup: {
      text: string
      steps: Array<{
        step: number
        title: string
        button: string
        rows: Array<
          Array<
            FormRowProps &
              (
                | CustomTextFieldProps
                | CustomPhoneFieldProps
                | CustomSelectFieldProps
              )
          >
        >
      }>
    }
  }
}
