import {IGatsbyImageData} from 'gatsby-plugin-image'
import {CountriesSelectProps} from '../common/layout/header/types'
import {WithCountriesProps} from '../countries/types'

export interface MainSectionProps extends WithCountriesProps {
  content: {
    home: {
      mainSection: {
        backgroundImage: {
          src: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData
            }
          }
          alt: string
        }
        text: string
        button: string
      }
    }
    countries: CountriesSelectProps
  }
}

export interface LogosSectionProps extends WithCountriesProps {
  content: {
    home: {
      logosSection: {
        text: string
        logos: Array<{
          src: {childImageSharp: {gatsbyImageData: IGatsbyImageData}}
          alt: string
        }>
      }
    }
    countries: CountriesSelectProps
  }
}

export interface InfoSectionProps {
  content: {
    home: {
      infoSection: {
        text: string
        infos: Array<{
          text: string
          icon: string
          link: {
            url: string
            label: string
          }
        }>
      }
    }
  }
}

export interface FindOutProps {
  content: {
    home: {
      findOutSection: {
        square1: {
          text: string
          button: string
          image: {
            src: {childImageSharp: {gatsbyImageData: IGatsbyImageData}}
            alt: string
          }
        }
        square2: {
          text: string
          button: string
          image: {
            src: {childImageSharp: {gatsbyImageData: IGatsbyImageData}}
            alt: string
          }
        }
      }
    }
  }
}
