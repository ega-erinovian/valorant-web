import React from 'react'

// Import CSS
import "./NavbarComp.css"

// import image
import ValoLogo from "../../assets/logo.webp"

const NavbarComp = () => {
  return (
    <div className='navbar container'>
        <div className='nav-logo'>
            <img src={ValoLogo} alt="Valorant Logo"/>
        </div>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Agents</a></li>
            <li><a href='#'>Maps</a></li>
            <li><a href='#'>About</a></li>
        </ul>
    </div>
  )
}

export default NavbarComp