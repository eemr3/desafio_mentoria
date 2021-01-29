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
  const [infoTurma, setInfoTurma] = useState([])
  const [valores, setValores] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    if (!infoProf.trim()) {
      alert('Obrigatório a escolha de um professor!')
      return
    }
    if (infoTurma.length === 0) {
      alert('Obrigatório a escolha da turmas!')
      return
    }
    const resgatandoProfessor = valores.map((item) => {
      return item.nome
    })

    for (let i = 0; i < valores.length; i++) {
      if (resgatandoProfessor[i] === infoProf) {
        return alert('Professor com turmas definidas!')
      }
    }
    setValores([...valores, { nome: infoProf, turma: [...infoTurma] }])
    clearChange()
  }

  function clearChange() {
    setInfoProf('')
    setInfoTurma('')
  }

  return (
    <div className="form-professor">
      <h1>Cadastro de Professores</h1>
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
          <option value="" hidden>
            Selecione um Professor
          </option>
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
            <div
              className="checkbox-professor"
              key={item.id}
              data-testid="checkbox_id"
            >
              <input
                name={item.turma}
                id={item.turma}
                type="checkbox"
                checked={infoTurma.includes(item.turma)}
                onChange={(e) => {
                  if (e.target.checked) {
                    // add
                    setInfoTurma([...infoTurma, e.target.name])
                  } else {
                    // delete
                    setInfoTurma(infoTurma.filter((x) => x !== e.target.name))
                  }
                }}
              />
              <label htmlFor={item.turma}>{item.turma}</label>
            </div>
          ))}
        </div>

        <Button texto="Enviar" />
      </form>

      <div className="list-containerProfessor">
        <ul className="list-cardsProfessor">
          {valores.map((item, index) => (
            <li key={index} data-testid="todo-listProfessor">
              <div className="list-turmaProfessor">
                <p>{item.nome}</p>
                <p>{item.turma.join(', ')}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Professor
