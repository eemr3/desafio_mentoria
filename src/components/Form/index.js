import React from 'react'

const Form = ({ onEnviar, children, ...rest }) => {
  return (
    <form onSubmit={onEnviar} {...rest}>
      {children}
    </form>
  )
}

export default Form
