import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'

import AlunoTurma from './AlunoTurma'

describe('Teste selecão de Turmas e Alunos', () => {
  it('Simula a seleção para turma', async () => {
    const { getByTestId, getAllByTestId } = render(<AlunoTurma />)
    fireEvent.change(getByTestId('select-turma'), { target: { value: 2 } })
    const optionsTurma = getAllByTestId('form-turma')

    expect(optionsTurma[0].selected).toBeFalsy()
    expect(optionsTurma[1].selected).toBeFalsy()
    expect(optionsTurma[2].selected).toBeFalsy()
  })

  it('Simula a seleção para aluno', async () => {
    const { getByTestId, getAllByTestId } = render(<AlunoTurma />)
    fireEvent.change(getByTestId('select-aluno'), {
      target: { value: 3 },
    })
    const optionsAluno = getAllByTestId('form-aluno')

    expect(optionsAluno[0].selected).toBeFalsy()
    expect(optionsAluno[1].selected).toBeFalsy()
    expect(optionsAluno[2].selected).toBeFalsy()
    expect(optionsAluno[3].selected).toBeFalsy()
    expect(optionsAluno[4].selected).toBeFalsy()

    const btnNode = await waitFor(() => getByTestId('form-btn'))

    fireEvent.click(btnNode)
  })
})
