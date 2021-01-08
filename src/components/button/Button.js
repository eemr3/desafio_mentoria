import React from 'react'

import './Button.css'

const Button = ({ text }) => {
  return <button data-testid="form-btn">{text}</button>
}

export default Button
