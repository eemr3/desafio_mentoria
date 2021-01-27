import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <nav className="menu" data-testid="navbar">
      <h1>Desenvolvendo-ME</h1>
      <ul className="nav-list">
        <li>
          <Link to="/">Matrículas</Link>
        </li>
        <li id="nav-logo-home">
          <Link to="/alunoturma">Turmas</Link>
        </li>
        <li>
          <Link to="/professor" data-testid="form-professor-link">
            Professores
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
