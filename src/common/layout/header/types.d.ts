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

export interface CountriesSelectProps {
  selected: string
  list: Array<{code: string; name: string; cities: Array<string>}>
}
