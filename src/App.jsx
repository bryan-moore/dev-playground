import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './components/hero';
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Epinova frontend developer playground</h1>
    </div>
  )
}

export default App
