import React from 'react'
import './features.css'
import blockchain from '../../Assets/blockchain.png'
import cyber from '../../Assets/cyber-security.png'
import deadline from '../../Assets/deadline.png'
import responsive from '../../Assets/responsive.png'

const Features = () => {
  return (
    <div className="wrapper">
        <section className="features container">
      <div className="left">
          <h5>Features</h5>
          <h2>Interchain <br /> Key <br /> Features</h2>
      </div>
      
      <div className="right">
          <div className="fcards">
            <i><img src={blockchain} alt="" /></i>
            <h4>Supports multiple blockchains</h4>
            <p>InterChain bridges blockchain ecosystems like Ethereum, Solana, and Polygon, enabling seamless 
              token transfers across different networks.</p>
          </div>
          <div className="fcards">
            <i><img src={cyber} alt="" /></i>
            <h4>Security and privacy</h4>
            <p>Advanced security measures ensure your assets are protected with multi-signature
               wallets and encryption protocols.</p>
          </div>
          <div className="fcards">
            <i><img src={deadline} alt="" /></i>
            <h4>Speed and efficiency</h4>
            <p>Swift transactions and competitive fees make InterChain the
               ideal choice for efficient cross-chain transfers.</p>
          </div>
          <div className="fcards">
            <i><img src={responsive} alt="" /></i>
            <h4>User-friendly interfacee</h4>
            <p>Swift transactions and competitive fees make InterChain the ideal
               choice for efficient cross-chain transfers.</p>
          </div>
      </div>
      
    </section>
    <div className="border"></div>
    </div>
    
  )
}

export default Features