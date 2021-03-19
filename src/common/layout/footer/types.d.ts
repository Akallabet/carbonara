export interface FooterContent {
  copyRight: string
  main: string
  socialMedia: Array<{type: string}>
}

export interface FooterProps {
  content: {
    footer: FooterContent
  }
}
