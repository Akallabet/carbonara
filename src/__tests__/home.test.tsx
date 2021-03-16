import React from 'react'
import {render} from '@testing-library/react'

import HomePage from '../pages'

test('should render the home page', () => {
  const {getByText} = render(<HomePage />)
  expect(getByText('Test')).toBeDefined()
})
