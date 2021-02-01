import React from 'react'

const Table = ({ children, ...rest }) => {
  return <table {...rest}>{children}</table>
}

export default Table
