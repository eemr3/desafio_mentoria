import React from 'react'

import './Button.css'

const Button = ({ texto }) => {
  return <button data-testid="form-btn">{texto}</button>
}

export default Button
