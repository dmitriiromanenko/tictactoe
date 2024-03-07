import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import './index.css'

const Link = ({ title, path, style }) => {
  return (
    <RouterLink to={path} style={style} className="control-button">
      {title}
    </RouterLink>
  )
}

export default Link
