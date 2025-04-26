import React from 'react'
import { BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Plan from './Components/Plan';
import About from './Components/About';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Plan' element={<Plan />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
