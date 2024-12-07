import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Content from './components/Content'
import { ThemeContext } from './Context/thrmscontext'

function App() {
  

  return (
    <>
      
      <div>
        <Navbar />
        <Content />
      </div>
      <Button/>
    </>
  )
}

export default App
