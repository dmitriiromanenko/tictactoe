import React from 'react'
import './index.css'

const Button = ({ title, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="control-button">
      {title}
    </button>
  )
}

export default Button
