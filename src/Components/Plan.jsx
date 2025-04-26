import React from 'react'
import Header from './Header'
import Hero from './PlanComponents/Hero'
import Choose from './PlanComponents/Choose'
import CreatePlan from './PlanComponents/CreatePlan'
import Footer from './Footer'
const Plan = () => {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <Choose />
      <CreatePlan />
      <Footer />
    </div>
  )
}

export default Plan
