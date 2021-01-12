import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'

import MatriculaAluno from './MatriculaAluno'

describe('Teste para formulário cadastro de aluno', () => {
  it('Deve adicionar nome do aluno quando o formulário for enviado', async () => {
    const { getByTestId, getByText } = render(<MatriculaAluno />)
    const fieldNodeName = await waitFor(() => getByTestId('form-field'))

    const name = 'testing-name'
    fireEvent.change(fieldNodeName, { target: { value: name } })

    expect(fieldNodeName.value).toEqual(name)

    const fieldNodeEnd = await waitFor(() => getByTestId('form-end'))

    const address = 'testing-address'
    fireEvent.change(fieldNodeEnd, { target: { value: address } })

    expect(fieldNodeEnd.value).toEqual(address)

    const btnNode = await waitFor(() => getByTestId('form-btn'))
    fireEvent.click(btnNode)

    const tdNameNode = await waitFor(() => getByText(name))
    const tdAddressNode = await waitFor(() => getByText(address))

    expect(tdNameNode).toBeDefined()
    expect(tdAddressNode).toBeDefined()
  })
})
