import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import Header from './Header'

describe('Header', () => {
  it('full app rendering', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Header />
      </Router>
    )

    expect(screen.getByText(/Desenvolvendo-ME/i)).toBeInTheDocument()

    const leftClick = { button: 0 }
    userEvent.click(screen.getByText(/Matricula/i), leftClick)

    expect(screen.getByText(/Desenvolvendo-ME/i)).toBeInTheDocument()
  })
})
