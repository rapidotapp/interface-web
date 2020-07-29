import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('Renders Rapid header', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Find/i)
  expect(linkElement).toBeInTheDocument()
})
