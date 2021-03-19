import ContentContext from './content-context'

const {Provider} = ContentContext

interface ContentComponent {
  data: any
  children: React.ReactNode
}

const ContentProvider: <T>(params: {
  children: JSX.Element
  data: T
}) => JSX.Element = ({data: content, children}: ContentComponent) => (
  <Provider value={{content}}>{children}</Provider>
)

export default ContentProvider
