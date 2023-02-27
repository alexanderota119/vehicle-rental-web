import React from 'react'
import { Link } from 'react-router-dom'

import './navigation-links.css'

const NavigationLinks = () => {
  return (
    <nav className={`navigation-links-nav `}>
      <Link to="/" className="navigation-links-navlink">
        Home
      </Link>
      <Link to="/explore" className="navigation-links-navlink1">
        Explore
      </Link>
      <span className="navigation-links-text">History</span>
    </nav>
  )
}

export default NavigationLinks
