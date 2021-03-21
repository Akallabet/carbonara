import {render, RenderResult} from '@testing-library/react'
import PageProvider from '../common/providers/page-provider'
import ThemeProvider from '../common/providers/theme-provider'

import header from '../content/header.md'
import footer from '../content/footer.md'
import countries from '../content/countries.md'
import home from '../content/home.md'

const mockImageData = () => ({
  childImageSharp: {
    gatsbyImageData: {
      layout: '',
      width: '',
      height: '',
      images: 'fallback',
    },
  },
})

home.attributes.mainSection.backgroundImage.src = mockImageData()
home.attributes.logosSection.logos = home.attributes.logosSection.logos.map(
  all => ({
    ...all,
    src: mockImageData(),
  }),
)

home.attributes.findOutSection.square1.image.src = mockImageData()
home.attributes.findOutSection.square2.image.src = mockImageData()

home.attributes.reviewSection.reviews = home.attributes.reviewSection.reviews.map(
  ({text, image: {alt}}) => ({
    text,
    image: {
      alt,
      src: mockImageData(),
    },
  }),
)

home.attributes.featuresSection.features = home.attributes.featuresSection.features.map(
  row =>
    row.map(({type, ...rest}) => {
      if (type === 'image') {
        return {
          type,
          ...rest,
          image: {
            alt: rest.image.alt,
            src: mockImageData(),
          },
        }
      } else
        return {
          type,
          ...rest,
        }
    }),
)

const data = {
  header: {
    frontmatter: header.attributes,
  },
  footer: {
    frontmatter: footer.attributes,
  },
  countries: {
    frontmatter: countries.attributes,
  },
  home: {
    frontmatter: home.attributes,
  },
}

type HOFRender = (Component: JSX.Element) => RenderResult

export const renderWithProviders: HOFRender = Component =>
  render(
    <ThemeProvider
      element={<PageProvider props={{data}} element={Component} />}
    />,
  )
