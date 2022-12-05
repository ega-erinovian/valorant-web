import React from 'react'

// Import CSS
import "./NavbarComp.css"

// import image
import ValoLogo from "../../assets/logo.webp"

const NavbarComp = () => {
  return (
    <>
      <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
            <img src={ValoLogo} alt="Logo" />
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="/">Home</a>
          <a href="#agents">Agents</a>
          <a href="/Maps">Maps</a>
          <a href="/About">About</a>
        </div>
      </div>
    </>
  )
}

export default NavbarComp