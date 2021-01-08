import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <nav className="menu">
      <h1>Desenvolvendo-ME</h1>
      <ul className="nav-list">
        <li>
          <Link to="/">Formulário Matricula</Link>
        </li>
        <li>
          <Link to="/alunoturma">Formulário Aluno/Turma</Link>
        </li>
        <li>
          <Link to="/professor">Formulário Professor</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
