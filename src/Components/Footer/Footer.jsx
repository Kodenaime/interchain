import React from 'react'
import './footer.css'
import logo from '../../Assets/logo.png'

const Footer = () => {
  return (
    <section className="container footer">

      <div className="first">
        <div className="logo">
          <img src={logo} alt="" />
          <p className="first-text">
            interchain allows you transfer asstes between
            blockchains easily and securely
          </p>
          <div className="form">
            <h4>sign up for our newsletter</h4>
            <form action="">
              <input type="email" />

            </form>
          </div>
        </div>
      </div>

      <div className="second">
        <h4>Quick Links</h4>
        <li><a href="">Features</a></li>
        <li><a href="">How it Works</a></li>
        <li><a href="">Supported Chains</a></li>
        <li><a href="">Join Community</a></li>
      </div>

      <div className="third">
        <h4>Legal and Compliance</h4>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Terms of Use</a></li>
        <li><a href="">Cookie Policy</a></li>
        <li><a href="">Compliance Disclosure</a></li>
      </div>

      <div className="socials">
        <h4>Socials</h4>
      </div>

    </section>
  )
}

export default Footer