import React from 'react'
import Header from './Header'
import Hero from './AboutComponents/Hero'
import Commitment from './AboutComponents/Commitment'
import Quilty from './AboutComponents/Quilty'
import Headquarters from './AboutComponents/Headquarters'
import Footer from './Footer'
const About = () => {
  return (
    <section className='container'>
      <Header />
      <Hero />
      <Commitment />
      <Quilty />
      <Headquarters />
      <Footer />
    </section>
  )
}

export default About
// s