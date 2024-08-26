import React from 'react'
import './hero.css'
import chain from '../../Assets/chain.png'

const Hero = () => {
  return (
    <div className="wrapper">
        <section className="hero container">
      <div className="left">
        <h1>
          Seamless <br /> Cross-Chain <br /> Transfers
        </h1>
        <h4>
          InterChain enables you transfer assets <br /> between blockchains quickly and securely
        </h4>
        <div className="btns">
          <div className="btn">
            Get started
          </div>
          <div className="btn-primary">
            learn more
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={chain} alt="" />
      </div>
    </section>

    <div className="border"></div>


    </div>
    
  )
}

export default Hero