import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MatriculaAuno from './forms/matricula/MatriculaAluno'
import AlunoTurma from './forms/alunoTurma/AlunoTurma'
import Professor from './forms/professor/Professor'

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={MatriculaAuno} />
      <Route path="/alunoturma" component={AlunoTurma} />
      <Route path="/professor" component={Professor} />
    </Switch>
  )
}

export default routes
