import ContentContext from './content-context'

const {Provider} = ContentContext

interface ContentComponent {
  content: any
  children: React.ReactNode
}

const ContentProvider: <T>(params: {
  children: JSX.Element
  content: T
}) => JSX.Element = ({content, children}: ContentComponent) => (
  <Provider value={{content}}>{children}</Provider>
)

export default ContentProvider
