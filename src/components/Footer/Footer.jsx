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
                        <a href="#"><FaInstagram /></a>
                    </li>
                    <li>
                        <a href="#"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="#"><FaGithub /></a>
                    </li>
                    <li>
                        <a href="#"><FaGlobe /></a>
                    </li>
                </ul>
                <p>All the images and videos are property of Riot Games™</p><br/>
                <p><strong>2022 || ega-erinovian</strong></p>
            </div>
        </footer>
    </>
  )
}

export default Footer