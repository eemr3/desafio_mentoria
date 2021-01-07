import React, { useState } from 'react'

import Button from '../../components/Button'
import './AlunoTurma.css'

const turmas = [
  {
    id: 1,
    turma: 'Matutino',
  },
  {
    id: 2,
    turma: 'Vespertino',
  },
  {
    id: 3,
    turma: 'Noturno',
  },
]
const alunos = [
  {
    matricula: 10000,
    nome: 'João',
    endereco: 'Rua A',
  },
  {
    matricula: 10001,
    nome: 'José',
    endereco: 'Rua B',
  },
  {
    matricula: 10002,
    nome: 'Pedro',
    endereco: 'Rua C',
  },
  {
    matricula: 10003,
    nome: 'Laura',
    endereco: 'Rua D',
  },
  {
    matricula: 10004,
    nome: 'Luciana',
    endereco: 'Rua E',
  },
]

function AlunoTurma() {
  const [turma, setTurma] = useState('')
  const [aluno, setAluno] = useState('')
  const [values, setValues] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    if (turma.trim() || aluno.trim()) {
      setValues([...values, { turma: turma, aluno: aluno }])

      clearSelect()
    }
  }

  function clearSelect() {
    setTurma('')
    setAluno('')
  }

  console.log(values)
  return (
    <div className="form-aluno">
      <h1>Formulário de cadastro de Turmas</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Selecione a Turma</label>
        <select
          className="select-form"
          value={turma}
          onChange={(e) => setTurma(e.target.value)}
          data-testid="select-turma"
        >
          <option value="0">Selecione uma Turma</option>
          {turmas.map((item) => (
            <option value={item.turma} key={item.id} data-testid="form-turma">
              {item.turma}
            </option>
          ))}
        </select>
        <label htmlFor="">Selecione o Aluno</label>
        <select
          className="select-form"
          value={aluno}
          onChange={(e) => setAluno(e.target.value)}
          data-testid="select-aluno"
        >
          <option value="0">Selecione um Aluno</option>
          {alunos.map((aluno) => (
            <option
              value={aluno.nome}
              key={aluno.matricula}
              data-testid="form-aluno"
            >
              {aluno.nome}
            </option>
          ))}
        </select>
        <Button text="Cadastra Aluno" />
      </form>

      <div className="list-container">
        <ul className="list-cards">
          {values.map((item, index) => (
            <li key={index} data-testid="lodo-list">
              <div className="list-turma">
                <span>{item.turma}</span>
                <p>{item.aluno}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AlunoTurma
