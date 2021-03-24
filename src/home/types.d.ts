import {IGatsbyImageData} from 'gatsby-plugin-image'
import {CountriesSelectProps} from '../common/components/header/types'
import {WithCountriesProps} from '../countries/types'

export interface ImageProps {
  src: {childImageSharp: {gatsbyImageData: IGatsbyImageData}}
  alt: string
}

export interface MainSectionProps extends WithCountriesProps {
  content: {
    home: {
      mainSection: {
        backgroundImage: ImageProps
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
        logos: Array<ImageProps>
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
          image: ImageProps
        }
        square2: {
          text: string
          button: string
          image: ImageProps
        }
      }
    }
  }
}

export interface ReviewSectionProps {
  content: {
    home: {
      reviewSection: {
        reviews: Array<{
          text: string
          image: ImageProps
        }>
      }
    }
  }
}

export interface FeaturesSectionProps {
  content: {
    home: {
      featuresSection: {
        features: Array<
          Array<{
            type: string
            description?: string
            title?: string
            image?: ImageProps
          }>
        >
      }
    }
  }
}

export interface MarketingSectionProps {
  content: {
    home: {
      marketingSection: {
        title: string
        description: string
        highlightText: string
        sub1: string
        sub2: string
        button: {
          label: string
          href: string
        }
      }
    }
  }
}

export interface FeaturedTopicsSectionProps {
  content: {
    home: {
      featuredTopicsSection: {
        title: string
        topics: Array<{
          text: string
          image: ImageProps
        }>
      }
    }
  }
}
