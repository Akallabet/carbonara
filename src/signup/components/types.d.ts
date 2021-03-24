import {SelectProps, TextFieldProps, CheckboxProps} from '@material-ui/core'

export interface AddedInputFieldProps {
  register: () => void
  error?: boolean
  label?: string
  required: boolean
  messages: {
    info?: string
    error?: {
      required: string
      validation: string
    }
  }
}

export interface AddedPhoneFieldProps {
  prefix: string
}

export interface AddedSelectFieldProps {
  prefix: string
  onChange: () => void
  options: Array<string>
}

export interface AddedCheckboxFieldProps {
  checked?: boolean
}

export type CustomTextFieldProps = TextFieldProps & AddedInputFieldProps
export type CustomPhoneFieldProps = TextFieldProps &
  AddedInputFieldProps &
  AddedPhoneFieldProps
export type CustomSelectFieldProps = SelectProps &
  AddedInputFieldProps &
  AddedSelectFieldProps

export type CustomCheckboxFieldProps = CheckboxProps &
  AddedInputFieldProps &
  AddedCheckboxFieldProps
