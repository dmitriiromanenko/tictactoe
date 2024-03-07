import React from 'react'

const Square = ({ value, onClick, size }) => {
  const style = value ? `squares ${value} square-${size}` : `squares square-${size}`

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  )
}
export default Square
