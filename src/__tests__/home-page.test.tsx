import {act, waitFor, within} from '@testing-library/react'
import HomePage from '../pages'
import userEvent from '@testing-library/user-event'

import {renderWithProviders} from '../test-utils/render-with-providers'

import countries from '../content/countries.md'
import home from '../content/home.md'

jest.useFakeTimers()

test('first section should display a text with a location city that changes every 3 seconds', async () => {
  const {getByText, findByText} = renderWithProviders(<HomePage />)

  expect(getByText(home.attributes.mainSection.text)).toBeDefined()
  expect(getByText(countries.attributes.list[0].cities[0])).toBeDefined()

  act(() => {
    jest.advanceTimersByTime(3000)
  })

  await waitFor(() =>
    expect(findByText(countries.attributes.list[0].cities[1])).toBeDefined(),
  )
  jest.clearAllTimers()
})

test('first section should change the list of location cities based on the dropdown selection', async () => {
  const {getByText, findByText, getByTestId} = renderWithProviders(<HomePage />)

  expect(getByText(home.attributes.mainSection.text)).toBeDefined()
  expect(getByText(countries.attributes.list[0].cities[0])).toBeDefined()

  const select = getByTestId('country-selector')

  userEvent.selectOptions(select, [countries.attributes.list[1].code])

  expect(await findByText(countries.attributes.list[1].cities[1])).toBeDefined()
})

test('logos section display a button and a text with the selected country', () => {
  const {getByTestId, getByRole, getByAltText} = renderWithProviders(
    <HomePage />,
  )

  const country = countries.attributes.list.find(
    ({code}: {code: string}) => code === countries.attributes.selected,
  )

  expect(getByRole('button', {name: 'Get started'})).toBeDefined()
  expect(getByTestId('trusted-text').textContent).toEqual(
    `Trusted across${country.name}`,
  )
  home.attributes.logosSection.logos.forEach(({alt}: {alt: string}) => {
    expect(getByAltText(alt)).toBeDefined()
  })
})

test('info section - should display a set of info with links and icons', () => {
  const {getByText, getByLabelText, getByTestId} = renderWithProviders(
    <HomePage />,
  )

  expect(getByText('Carbonara is 100% FREE and easy to set up')).toBeDefined()

  home.attributes.infoSection.infos.forEach(({text, icon, link: {label}}) => {
    expect(getByText(text)).toBeDefined()
    expect(getByLabelText(icon)).toBeDefined()
    expect(
      within(getByTestId('info-section')).getByRole('link', {name: label}),
    ).toBeDefined()
  })
})

test('find out section - should display two images with text and buttons', () => {
  const {getByText, getByAltText, getByTestId} = renderWithProviders(
    <HomePage />,
  )
  expect(
    getByAltText(home.attributes.findOutSection.square1.image.alt),
  ).toBeDefined()

  expect(getByText(home.attributes.findOutSection.square1.text)).toBeDefined()

  expect(
    getByAltText(home.attributes.findOutSection.square2.image.alt),
  ).toBeDefined()
  expect(getByText(home.attributes.findOutSection.square2.text)).toBeDefined()
})

test('carousel section - should rotate image and text', async () => {
  const {getByText, findByText, getByTestId} = renderWithProviders(<HomePage />)

  expect(getByText(home.attributes.reviewSection.reviews[0].text)).toBeDefined()

  act(() => {
    jest.advanceTimersByTime(20000)
  })

  expect(getByTestId('carousel-0')).not.toBeVisible()
  expect(getByTestId('carousel-1')).toBeVisible()
})
