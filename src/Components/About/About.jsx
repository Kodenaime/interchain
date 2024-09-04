import React from 'react'
import './about.css'
import note from '../../Assets/notebook.png'

import { FaClipboardList } from "react-icons/fa";
import { GiChaingun } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";

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

              <i><IoWalletOutline /></i>
              <p>Connect Wallet - Begin by connecting your preferred Web3 wallet,
                 such as MetaMask or Trust Wallet, to our platform.</p>
            
          </article>
          <article className="article">

              <i><GiChaingun /></i>
              <p>Select Chains - Choose the
                 blockchain networks involved in your transaction.</p>
            
          </article>
          <article className="article">

              <i><FaClipboardList /></i>
              <p>Confirm Transfer - Review the transaction details,
                 including token amounts, fees, and destination addresses.
                 <span>Once confirmed, our secure cross-chain bridge initiates the transfer,
                 ensuring your assets move swiftly and securely.</span>
              </p>
              
          </article>
        </div>

      </section>

      <div className="border"></div>

    </div>
  )
}

export default About