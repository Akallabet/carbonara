import {WithCountriesProps} from '../../../countries/types'

export interface HeaderContent {
  logo: {
    altText: string
  }
  nav: {
    links: Array<{label: string; url: string}>
    buttons: {
      diners: string
      signUp: string
    }
  }
}

export interface HeaderProps {
  content: {
    header: HeaderContent
    countries: CountriesSelectProps
  }
}

export interface CountriesSelectProps extends WithCountriesProps {
  selected: string
  list: Array<{code: string; name: string; cities: Array<string>}>
}

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
