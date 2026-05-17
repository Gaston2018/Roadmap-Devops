import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <h1>Mi primer deploy DevOps 🚀</h1>

      <p>
        Desplegado automáticamente con:
      </p>

      <ul>
        <li>GitHub</li>
        <li>GitHub Actions</li>
        <li>Azure Static Web Apps</li>
      </ul>

      <hr />

      <p>
        Fecha:
      </p>

      <strong>
        {new Date().toLocaleString()}
      </strong>
    </>
  )
}

export default App