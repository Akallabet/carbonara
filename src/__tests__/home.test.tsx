import HomePage from '../pages'
import header from '../mocks/content/header.json'
import {renderWithProviders} from '../test-utils/render-with-providers'
import mockIsMobile from '../test-utils/mock-is-mobile'

const content = {
  header,
}

test('should display an Header with logo, links and buttons for Desktop', () => {
  const {getByAltText, getByText, getByRole, getByTestId} = renderWithProviders(
    <HomePage data={content} />,
    content,
  )

  expect(getByAltText(header.logo.altText)).toBeDefined()
  header.nav.links.forEach(({label}) => {
    expect(getByText(label)).toBeVisible()
  })
  expect(getByTestId('nav').parentElement).toBeVisible()
  expect(getByRole('button', {name: 'For Diners'})).toBeDefined()
  expect(getByRole('link', {name: 'Sign up'})).toBeDefined()
})

test('should display an Header with logo, links and buttons for Mobile', () => {
  mockIsMobile()
  const {getByAltText, queryByText, getByTestId} = renderWithProviders(
    <HomePage data={content} />,
    content,
  )
  expect(getByTestId('nav').parentNode).toBeVisible()

  expect(getByAltText(header.logo.altText)).toBeDefined()
  header.nav.links.forEach(({label}) => {
    expect(queryByText(label)).toBeVisible()
  })
  // expect(getByRole('button', {name: 'For Diners'})).toBeDefined()
  // expect(getByRole('button', {name: 'Sign up'})).toBeDefined()
})
