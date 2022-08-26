import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="App">
      <div>
       <Header />
       <Hero />
      </div>
      
    </div>
  )
}

export default App
