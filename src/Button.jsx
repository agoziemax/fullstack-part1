import React from 'react'

function Button({onClick, children}) {
  return (
    <button className=' border-1 me-2 mb-5' onClick={onClick}>{children}</button>

  )
}

export default Button
