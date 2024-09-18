import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'; // Importa el componente Input

function App() {
  return (
    <div>
      <h1 className = 'title'>DWM - UT4 - TA3</h1>
      <Input>
        {(inputText) => (
          <p>Tu información ingresada: {inputText}</p>
        )}
      </Input>
    </div>
  )
}

export default App