import React from 'react'
import Header from './Header'
import Hero from './HomeComponents/Hero'
import Collection from './HomeComponents/Collection'
import Choose from './HomeComponents/Choose'
import Howto from './HomeComponents/Howto'
import Footer from './Footer'

const Home = () => {
  return (
    <section className='container'>
      <Header />
      <Hero />
      <Collection />
      <Choose />
      <Howto />
      <Footer />
    </section>
  )
}

export default Home
