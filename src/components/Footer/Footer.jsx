import React from 'react'

import { FaInstagram, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

// Import css
import "./Footer.css"

const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer-content container">
                <h1>VALORANT<br/><span>AGENT</span></h1>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/egaerinovian/" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ega-erinovian/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ega-erinovian" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://app.netlify.com/teams/egaputra69/overview" target="_blank" rel="noreferrer">
                            <FaGlobe />
                        </a>
                    </li>
                </ul>
                <p>All the images and videos are property of Riot Games™</p><br/>
                <p><strong>2022 | ega-erinovian</strong></p>
            </div>
        </footer>
    </>
  )
}

export default Footer