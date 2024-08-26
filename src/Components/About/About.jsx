import React from 'react'
import './about.css'
import note from '../../Assets/notebook.png'
import small1 from '../../Assets/small1.png'
import small2 from '../../Assets/small2.png'
import small3 from '../../Assets/small3.png'

const About = () => {
  return (
    <div className="wrapper">
      <section className="about container">

        <div className="about-left">
          <img src={note} alt="" />
        </div>

        <div className="about-right">
          <h5>How it Works</h5>
          <h2>How to use InterChain</h2>
          <article className="article">
            <i className="about-icon"><img src={small1} alt="" /></i>
              
              <p>Connect Wallet - Begin by connecting your preferred Web3 wallet,
                 such as MetaMask or Trust Wallet, to our platform.</p>
            
          </article>
          <article className="article">
            <i className="about-icon">
              <img src={small2} alt="" /></i>
              <p>Connect Wallet - Begin by connecting your preferred Web3 wallet,
                 such as MetaMask or Trust Wallet, to our platform.</p>
            
          </article>
          <article className="article">
            <i className="about-icon">
              <img src={small3} alt="" />  </i>
              <p>Connect Wallet - Begin by connecting your preferred Web3 wallet,
                 such as MetaMask or Trust Wallet, to our platform.</p>
          
          </article>
        </div>

      </section>

      <div className="border"></div>

    </div>
  )
}

export default About