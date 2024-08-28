import React from 'react'
import './footer.css'
import logo from '../../Assets/logo.png'

import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="container footer">

      <div className="first">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p className="first-text">
            interchain allows you transfer asstes between
            blockchains easily and securely
        </p>
        <div className="form">
            <h4>sign up for our newsletter</h4>
            <form action="">
              <input type="email" placeholder='youremail@gmail.com'/>
              <button>Sign Up</button>

            </form>
        </div>
        <div className="copyright">
          <small>&#169; 2024 InterChain. All rights reserved </small>
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
        <div className="soc">
        <FaDiscord /> <span>Discord</span> 
        </div>
        <div className="soc">
        <FaTelegram /> <span>Telegram</span>
        </div>
        <div className="soc">
        <FaXTwitter /> <span>X</span> 
        </div>
        <div className="soc">
        <FaLinkedin /><span>Linkedin</span>
        </div>

      </div>

    </section>
  )
}

export default Footer