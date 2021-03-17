import React from 'react'
import {graphql} from 'gatsby'

interface IndexPageProps {
  data: {
    header: {
      logo: {
        altText: string
      }
      nav: {
        links: Array<{label: string; url: string}>
      }
    }
  }
}

const IndexPage = ({
  data: {
    header: {
      logo: {altText},
      nav: {links},
    },
  },
}: IndexPageProps): JSX.Element => {
  return (
    <header>
      <div>
        <img src="" alt={altText} />
      </div>
      <nav>
        {links.map(({label, url}) => (
          <a key={label} href={url}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default IndexPage

export const query = graphql`
  query HomePage {
    header: restApiContentHeader {
      logo {
        altText
      }
      nav {
        links {
          label
          url
        }
      }
    }
  }
`
