import React from 'react'

const Form = (props, { handleSubmit }) => {
  return <form onSubmit={handleSubmit}>{props.children}</form>
}

export default Form
