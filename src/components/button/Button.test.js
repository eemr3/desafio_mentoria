import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'

import Button from './Button'

describe('Teste Ação do Botão', () => {
  it('Simular ação do botão', async () => {
    const { getByTestId } = render(<Button />)

    const btnNode = await waitFor(() => getByTestId('form-btn'))

    fireEvent.click(btnNode)
  })
})
