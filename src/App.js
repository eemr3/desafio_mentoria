import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes />
      </div>
    </Router>
  )
}

export default App
