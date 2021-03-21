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
        trustedText: string
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
        logos: Array<string>
      }
    }
    countries: CountriesSelectProps
  }
}
