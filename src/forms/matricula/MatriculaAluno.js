import React, { useState } from 'react'

import './Matricula.css'

import Button from '../../components/button/Button'

const MatriculaAluno = () => {
  const [values, setValues] = useState([])
  const [matricula, setMatricula] = useState(10000)
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (nome.trim() || endereco.trim()) {
      setValues([
        ...values,
        { nome: nome, endereco: endereco, matricula: matricula },
      ])
      clearInput()
      setMatricula(matricula + 1)
    }
  }

  function clearInput() {
    setEndereco('')
    setNome('')
  }

  return (
    <div className="form-matricula">
      <h1>Formulário matrícula do aluno</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Matrícula</label>
        <input type="text" name="matricula" value={matricula} disabled />

        <label htmlFor="">Nome aluno</label>
        <input
          data-testid="form-field"
          type="text"
          name="nome"
          placeholder="Nome completo"
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="">Endereço</label>
        <input
          data-testid="form-end"
          type="text"
          name="endereco"
          placeholder="Endereço completo"
          onChange={(e) => setEndereco(e.target.value)}
        />

        <Button text="Cadastra Aluno" />
      </form>
      <div className="table-form">
        <table data-testid="table" className="table-aluno">
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nome Aluno</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {values.map((t, index) => (
              <tr key={index}>
                <td>{t.matricula}</td>
                <td>{t.nome}</td>
                <td>{t.endereco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MatriculaAluno
