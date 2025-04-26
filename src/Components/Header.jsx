import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="nav">
          <div className="logo-container">
            <img src="images/beans.png" alt="logo" />
            <span className="logo-text">coffeeroasters</span>
          </div>
          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/plan">Create your plan</Link>
          </div>
        </div>
      </header>
  )
}

export default Header
