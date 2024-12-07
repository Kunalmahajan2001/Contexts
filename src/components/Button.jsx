import React, { useContext } from 'react'
import { ThemeContext } from '../Context/thrmscontext'

function Button() {
    const {updateTheme}=useContext(ThemeContext)
    
  return (
    <>
    <button onClick={updateTheme}>Click</button>
    </>
  )
}

export default Button