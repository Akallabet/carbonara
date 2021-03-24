export interface AccountCreationProps {
  content: {
    signup: {
      text: string
      steps: Array<{
        step: number
        title: string
        button: string
        rows: Array<
          Array<{
            type: string
            label: string
            width: number
          }>
        >
      }>
    }
  }
}
