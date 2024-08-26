import React from 'react'
import './support.css'
import icon1 from '../../Assets/icon1.png'

const Support = () => {
  return (
    <section className="support">
      <h5>supported chains</h5>
      <h2>List of Supported Chains</h2>
      <div className="sup-icons">
        <img src={icon1} alt="" />
      </div>
    </section>
  )
}

export default Support