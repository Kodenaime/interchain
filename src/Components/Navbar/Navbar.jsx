import React from 'react'
import './navbar.css'
import logo from'../../Assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-items">
        <li><a href="">Features</a></li>
        <li><a href="">How it Works</a></li>
        <li><a href="">Supported Chains</a></li>
        <li><a href="">Join Community</a></li>
      </ul>
      <div className="btn">Launch Dapp</div>
    </div>
  )
}

export default Navbar