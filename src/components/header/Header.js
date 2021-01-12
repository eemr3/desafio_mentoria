import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <nav className="menu" data-testid="navbar">
      <h1>Desenvolvendo-ME</h1>
      <ul className="nav-list">
        <li>
          <Link to="/">Formulário Matricula</Link>
        </li>
        <li id="nav-logo-home">
          <Link to="/alunoturma">Formulário Aluno/Turma</Link>
        </li>
        <li>
          <Link to="/professor" data-testid="form-professor-link">
            Formulário Professor
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
