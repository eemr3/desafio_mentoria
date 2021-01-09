import React, { useState } from 'react'

import Button from '../../components/button/Button'
import './Professor.css'

const professores = [
  {
    id: 1,
    nome: 'Marco Castro',
  },
  {
    id: 2,
    nome: 'Maike Brito',
  },
  {
    id: 3,
    nome: 'Loiane Groner',
  },
  {
    id: 4,
    nome: 'Vinicius Dacal',
  },
  {
    id: 5,
    nome: 'Leonardo Moura',
  },
]

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

function Professor() {
  const [infoProf, setInfoProf] = useState('')
  const [infoTurma, setInfoTurma] = useState({})
  const [values, setValues] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    if (infoProf.trim()) {
      setValues([...values, { nome: infoProf, turma: infoTurma }])

      clearChange()
    }
  }

  function clearChange() {
    setInfoProf('')
    setInfoTurma('')
  }

  return (
    <div className="form-professor">
      <h1>Formulário de cadastro de Professores</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="label-professor">
          Professor
        </label>
        <select
          className="select-professor"
          value={infoProf}
          onChange={(e) => setInfoProf(e.target.value)}
          data-testid="select-professor"
        >
          <option value="0">Selecione um Professor</option>
          {professores.map((professor) => (
            <option
              value={professor.nome}
              key={professor.id}
              data-testid="option-professor"
            >
              {professor.nome}
            </option>
          ))}
        </select>
        <div className="check-grup">
          <h2>Slecione quais Turmas</h2>
          {turmas.map((item) => (
            <div className="checkbox-professor" key={item.id}>
              <input
                name={item.turma}
                type="checkbox"
                checked={infoTurma[item.turma] || false}
                onChange={(e) =>
                  setInfoTurma({
                    ...infoTurma,
                    [e.target.name]: e.target.checked,
                  })
                }
              />
              <label htmlFor="">{item.turma}</label>
            </div>
          ))}
        </div>

        <Button text="Cadastra Professor" />
      </form>

      <div className="list-containerProfessor">
        <ul className="list-cardsProfessor">
          {values.map((item, index) => (
            <li key={index} data-testid="todo-listProfessor">
              <div className="list-turmaProfessor">
                <p>{item.nome}</p>
                <span>{Object.keys(item.turma).join(', ')}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Professor
