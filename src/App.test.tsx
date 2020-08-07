import { render } from '@testing-library/react'
import React from 'react'

import App from './App'

test('Renders Rapid header', () => {
  const { getByText } = render(<App />)
  const placeholder = getByText(/Rapid/i)
  expect(placeholder).toBeInTheDocument()
})
