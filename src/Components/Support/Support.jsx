import React from 'react'
import './support.css'
import icon1 from '../../Assets/icon1.png'
import icon2 from '../../Assets/icon2.png'
import icon3 from '../../Assets/icon3.png'
import icon4 from '../../Assets/icon4.png'
import icon5 from '../../Assets/icon5.png'
import icon6 from '../../Assets/icon6.png'
import icon7 from '../../Assets/icon7.png'

const Support = () => {
  return (
    <section className="support container">
      <h5>supported chains</h5>
      <h2>List of Supported Chains</h2>
      <div className="sup-icons">
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
        <img src={icon4} alt="" />
        <img src={icon5} alt="" />
        <img src={icon6} alt="" />
        <img src={icon7} alt="" />
      </div>
      <p className="sup-text">
      More networks are constantly being integrated, 
      ensuring you have access to the widest range 
      of <br /> assets possible. Whether you're bridging
       assets between chains or participating 
       in DeFi across <br /> multiple networks,
        makes it seamless.
      </p>
    </section>
  )
}

export default Support