import React from 'react'

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`
  console.log(value, 'value')

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  )
}
export default Square
