export interface FooterProps {
  content: {
    footer: {
      copyRight: string
      main: string
      socialMedia: Array<{type: string}>
      buttons: {
        signUp: {
          label: string
          href: string
        }
      }
    }
  }
}
