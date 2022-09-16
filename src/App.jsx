import { useState } from 'react'
import reactLogo from './assets/react.svg'
import epinovaLogo from './assets/epinova-logo.svg'
import menu from './assets/menu.svg'
import './App.css'

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <nav className="navbar">
                <div className="navbar__logo"><img src={epinovaLogo} alt="Epinova logo" /></div>
                <button className="navbar__menu" aria-label="open menu"><img src={menu} alt="Menu logo" /></button>
            </nav>
            <section className="hero">
                <div className="overlay"></div>
                <div className="hero__content">
                    <span className="red">Vi är en digital byrå</span> som hjälper kunder att lyckas med sina webbsatsningar. 
                </div>
            </section>
        </div>
    </div>
  )
}

export default App
