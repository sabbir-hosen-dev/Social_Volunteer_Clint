import React from 'react'
import "./Navber.css"
import { Link } from 'react-router-dom'
const logo = require("../../Assist/Images/logo.png");


function Navber() {
  return (
    <nav>
      <img src={logo} className='logo' alt="logo" />
      <ul>
        <Link className='link' to="/">Home</Link>
        <Link className='link'>Donation</Link>
        <Link className='link'>Events </Link>
        <Link className='link'>Blog</Link>
        <button className="btn">Register</button>
        <button className="btn admin">Adimg</button>
      </ul>
    </nav>
  )
}

export default Navber
