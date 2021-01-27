import React, { useState, useRef } from 'react'

// import Form from '../../components/form'
import Button from '../../components/button/Button'
import './Matricula.css'

const initialValeus = [
  {
    name: '',
    address: '',
  },
]

const MatriculaAluno = () => {
  const [values, setValues] = useState(initialValeus)
  const [registration, setRegistration] = useState(10000)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const inputRef = useRef()

  function handleSubmit(event) {
    event.preventDefault()

    if (!name.trim() || !address.trim()) {
      return alert('Campos Nome do aluno e Endereço, são obrigatórios')
    }

    setValues([
      ...values,
      { name: name, address: address, registration: registration },
    ])
    setRegistration(registration + 1)
    clearInput()
  }

  function clearInput() {
    setName('')
    setAddress('')
    inputRef.current.focus()
  }

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div className="form-matricula">
      <h1>Matrículas dos alunos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Matrícula</label>
        <input type="text" name="matricula" value={registration} disabled />

        <label htmlFor="nomeAluno">Nome aluno *</label>
        <input
          type="text"
          id="nomeAluno"
          data-testid="form-field"
          placeholder="Nome completo"
          name="nome"
          value={name}
          onChange={handleChange}
          ref={inputRef}
        />

        <label htmlFor="endereco">Endereço *</label>
        <input
          id="endereco"
          data-testid="form-end"
          type="text"
          value={address}
          name="endereco"
          placeholder="Endereço completo"
          onChange={(e) => setAddress(e.target.value)}
        />

        <Button text="Enviar" />
      </form>
      <div className="matricula__span-aviso">
        <span>Campos com o * são obrigatório!</span>
      </div>
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
                <td>{t.registration}</td>
                <td>{t.name}</td>
                <td>{t.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MatriculaAluno
