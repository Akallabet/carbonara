import {IGatsbyImageData} from 'gatsby-plugin-image'
import {CountriesSelectProps} from '../common/layout/header/types'

export interface MainSectionProps {
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
      }
    }
    countries: CountriesSelectProps
  }
}
