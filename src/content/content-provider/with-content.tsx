import React from 'react'
import ContentContext from './content-context'

const withContent = (
  Component: React.ElementType,
): ((props: any) => JSX.Element) => {
  const WithContext = (props: any): JSX.Element => (
    <ContentContext.Consumer>
      {({content}: any): JSX.Element => (
        <Component {...props} content={content} />
      )}
    </ContentContext.Consumer>
  )

  return WithContext
}

export default withContent
