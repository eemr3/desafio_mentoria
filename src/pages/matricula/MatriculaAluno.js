import React, { useState, useRef } from 'react'

import Form from '../../components/Form'
import Button from '../../components/button/Button'
import Table from '../../components/Table'
import './Matricula.css'

const ValoresIniciais = [
  {
    nome: '',
    endereco: '',
  },
]

const MatriculaAluno = () => {
  const [valores, setValores] = useState(ValoresIniciais)
  const [matricula, setMatricula] = useState(10000)
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const inputRef = useRef()

  function enviar(event) {
    event.preventDefault()

    if (!nome.trim() || !endereco.trim()) {
      return alert('Campos Nome do aluno e Endereço, são obrigatórios')
    }

    const resgatarNomes = valores.map((item) => {
      return item.nome
    })

    for (let i = 0; i < valores.length; i++) {
      if (resgatarNomes[i] === nome) {
        return alert('Aluno já cadastrado!')
      }
    }

    setValores([
      ...valores,
      { nome: nome, endereco: endereco, matricula: matricula },
    ])
    setMatricula(matricula + 1)
    limparInput()
  }

  function limparInput() {
    setNome('')
    setEndereco('')
    inputRef.current.focus()
  }

  return (
    <div className="form-matricula">
      <h1>Matrículas dos alunos</h1>
      <Form onSubmit={enviar}>
        <label htmlFor="">Matrícula</label>
        <input type="text" name="matricula" value={matricula} disabled />

        <label htmlFor="nomeAluno">Nome aluno *</label>
        <input
          type="text"
          id="nomeAluno"
          data-testid="form-field"
          placeholder="Nome completo"
          name="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          ref={inputRef}
        />

        <label htmlFor="endereco">Endereço *</label>
        <input
          id="endereco"
          data-testid="form-end"
          type="text"
          value={endereco}
          name="endereco"
          placeholder="Endereço completo"
          onChange={(e) => setEndereco(e.target.value)}
        />
        <Button texto="Enviar" />
      </Form>

      <div className="matricula-span-aviso">
        <span>Campos com o * são obrigatório!</span>
      </div>
      <div className="table-form">
        <Table data-testid="table" className="table-aluno">
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nome Aluno</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {valores.map((item, index) => (
              <tr key={index}>
                <td>{item.matricula}</td>
                <td>{item.nome}</td>
                <td>{item.endereco}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <table data-testid="table" className="table-aluno">
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nome Aluno</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {valores.map((item, index) => (
              <tr key={index}>
                <td>{item.matricula}</td>
                <td>{item.nome}</td>
                <td>{item.endereco}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  )
}

export default MatriculaAluno
