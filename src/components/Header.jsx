import React from "react"
import logo from "../assets/epinova-logo.svg"

function Header(){
    return (
        <div className="navigation">
            <img src={logo}alt="logo" />
            <nav>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </nav>
        </div>
    )
}

export default Header

