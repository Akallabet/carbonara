import {act, waitFor} from '@testing-library/react'
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
  home.attributes.logosSection.logos.forEach((logo: string) => {
    expect(getByAltText(logo.split('-').join(' '))).toBeDefined()
  })
})
