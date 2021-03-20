import {act, waitFor} from '@testing-library/react'
import HomePage from '../pages'

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
