import HomePage from '../pages'
import header from '../mocks/content/header.json'
import {renderWithProviders} from '../render-with-providers'

const content = {
  header,
}

test('should display an Header with logo, links and buttons', () => {
  const {getByAltText, getByText} = renderWithProviders(
    <HomePage data={content} />,
    content,
  )

  expect(getByAltText(header.logo.altText)).toBeDefined()
  header.nav.links.forEach(({label}) => {
    expect(getByText(label)).toBeDefined()
  })
})
