import {GridSize} from '@material-ui/core'
import {
  CustomPhoneFieldProps,
  CustomSelectFieldProps,
  CustomTextFieldProps,
} from './components/types'

export interface FieldProps {
  props: CustomTextFieldProps | CustomPhoneFieldProps | CustomSelectFieldProps
}

export interface FormElementProps {
  type: string
  name: string
  width: GridSize
  validation?: string
}

export interface FormProps {
  button: string
  rows: Array<Array<FormElementProps & FieldProps>>
  button: string
  onSubmit: (values: any) => void
}

export interface StepsFormProps {
  step: number
  title: string
}

export interface AccountCreationProps {
  content: {
    signup: {
      text: string
      steps: Array<StepsFormProps & FormProps>
    }
  }
}
