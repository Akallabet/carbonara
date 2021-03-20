import HomePage from '../pages'
import header from '../content/header.md'
import footer from '../content/footer.md'
import countries from '../content/countries.md'

import {renderWithProviders} from '../test-utils/render-with-providers'
import {fireEvent, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('should display an Header with logo, links and buttons for Desktop', () => {
  const {getAllByAltText, getByText, getByRole} = renderWithProviders(
    <HomePage />,
  )

  expect(getAllByAltText(header.attributes.logo.altText).length).toEqual(2)
  header.attributes.nav.links.forEach(({label}) => {
    expect(getByText(label)).toBeVisible()
  })
  expect(getByRole('button', {name: 'For Diners'})).toBeDefined()
  expect(getByRole('link', {name: 'Sign up'})).toBeDefined()
})

test('should display the Header with logo and menu icon for Mobile', async () => {
  const {getByTestId, getByRole} = renderWithProviders(<HomePage />)
  expect(
    getByRole('link', {
      name: 'Sign up',
      hidden: false,
    }),
  ).toBeDefined()
  expect(within(getByTestId('mobile')).queryByText('Sign up')).toBeNull()

  fireEvent.click(getByRole('button', {name: 'menu'}))
  expect(
    await within(getByTestId('menu')).findByText('Sign up'),
  ).toBeInTheDocument()
})

test('should display the footer', () => {
  const {getByText, getByLabelText} = renderWithProviders(<HomePage />)

  expect(getByText(footer.attributes.copyRight)).toBeDefined()
  expect(getByText(footer.attributes.main)).toBeDefined()
  footer.attributes.socialMedia.forEach(({type}) => {
    expect(getByLabelText(type)).toBeDefined()
  })
})

test('should display a functional dropdown with a list of countries to select', () => {
  const {getByTestId, getAllByRole, getByRole} = renderWithProviders(
    <HomePage />,
  )

  const select = getByTestId('country-selector')
  expect(select).toBeDefined()
  const defaultCountry = getByRole('option', {
    selected: true,
  })
  expect(defaultCountry.textContent).toEqual(
    (
      countries.attributes.list.find(
        ({code}) => code === countries.attributes.selected,
      ) || {}
    ).name,
  )
  const options = getAllByRole('option')
  options.forEach((option, i) => {
    expect(option.textContent).toEqual(countries.attributes.list[i].name)
  })
  userEvent.selectOptions(select, [countries.attributes.list[1].code])

  expect(
    getByRole('option', {
      selected: true,
    }).textContent,
  ).toEqual(countries.attributes.list[1].name)
})
