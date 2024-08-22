import React from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import Hero from '../src/Components/Hero/Hero'
import Features from '../src/Components/Features/Features'
import About from '../src/Components/About/About'
import Support from '../src/Components/Support/Support'
import Newsletter from '../src/Components/Newsletter/Newsletter'
import Footer from '../src/Components/Footer/Footer'

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Support />
        <Newsletter />
        <Footer />
    </>
  )
}

export default App