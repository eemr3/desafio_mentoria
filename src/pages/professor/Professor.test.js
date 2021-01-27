import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Professor from './Professor'

describe('Teste Formulario cadastro Professor', () => {
  afterEach(cleanup)
  it('Simula a seleção para professor', async () => {
    const { getByTestId, getAllByTestId } = render(<Professor />)
    fireEvent.change(getByTestId('select-professor'), {
      target: { value: 3 },
    })
    const optionsAluno = getAllByTestId('option-professor')

    expect(optionsAluno[0].selected).toBeFalsy()
    expect(optionsAluno[1].selected).toBeFalsy()
    expect(optionsAluno[2].selected).toBeFalsy()
    expect(optionsAluno[3].selected).toBeFalsy()
    expect(optionsAluno[4].selected).toBeFalsy()
  })

  it('Simulando seleção do checkbox', () => {
    render(<Professor />)
    const checkbox = document.querySelector('input[type="checkbox"]')

    fireEvent.click(checkbox)
    expect(checkbox).toHaveProperty('checked', true)

    fireEvent.click(checkbox)
    expect(checkbox).toHaveProperty('checked', false)
  })
})
