import React from 'react'

import Button from '../../components/button/Button'
import './Professor.css'

const professores = [
  {
    id: 1,
    nome: 'Marco Castro',
    diciplina: 'Ruby on Rails',
  },
  {
    id: 2,
    nome: 'Maike Brito',
    diciplina: 'HTML CSS JS',
  },
  {
    id: 3,
    nome: 'Loiane Groner',
    diciplina: 'Java',
  },
  {
    matricula: 4,
    nome: 'Loiane Groner',
    diciplina: 'ReactJs',
  },
  {
    matricula: 5,
    nome: 'Leonardo Moura',
    diciplina: 'C#',
  },
]

function Professor() {
  function handleSubmit(event) {}

  return (
    <div className="form-professor">
      <h1>Formulário de cadastro de Professores</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="label-professor">
          Professor
        </label>
        <select
          className="select-professor"
          value=""
          onChange=""
          data-testid="select-turma"
        >
          <option value="0">Selecione um Professor</option>
          {professores.map((professor) => (
            <option
              value={professor.nome}
              key={professor.id}
              data-testid="form-turma"
            >
              {professor.nome}
            </option>
          ))}
        </select>
        <div className="check-grup">
          <h2>Slecione quais Turmas</h2>
          <div className="checkbox-professor">
            <input name="isGoing" type="checkbox" />
            <label htmlFor="">Matutino</label>
          </div>
          <div className="checkbox-professor">
            <input name="isGoing" type="checkbox" />
            <label htmlFor="">Vespertino</label>
          </div>
          <div className="checkbox-professor">
            <input name="isGoing" type="checkbox" />
            <label htmlFor="">Noturno</label>
          </div>
        </div>

        <Button text="Cadastra Aluno" />
      </form>

      {/* <div className="list-container">
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
      </div> */}
    </div>
  )
}

export default Professor
