import ContentContext from './content-context'

const {Provider} = ContentContext

interface ContentComponent {
  data: any
  children: React.ReactNode
}

const ContentProvider: <T>(params: {
  children: JSX.Element
  data: T
}) => JSX.Element = ({data, children}: ContentComponent) => {
  const keys = Object.keys(data)
  const content = keys.reduce((content, key) => {
    content[key] = data[key].frontmatter
    return content
  }, {})
  return <Provider value={{content}}>{children}</Provider>
}

export default ContentProvider
