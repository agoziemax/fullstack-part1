import React from 'react'

function Button({onClick, children}) {
  return (
    <button className=' border-danger-subtle me-2 mb-5 rounded-2' onClick={onClick}>{children}</button>

  )
}

export default Button
