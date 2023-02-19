import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-mobile.css'

const NavigationMobile = (props) => {
  return (
    <nav className={`navigation-mobile-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-mobile-link">
        Home
      </Link>
      <Link to="/explore" className="navigation-mobile-navlink">
        Explore
      </Link>
      <span className="navigation-mobile-text">History</span>
      <Link to="/login" className="navigation-mobile-navlink1">
        Login
      </Link>
      <Link to="/register" className="navigation-mobile-link1">
        Register
      </Link>
    </nav>
  )
}

NavigationMobile.defaultProps = {
  rootClassName: '',
}

NavigationMobile.propTypes = {
  rootClassName: PropTypes.string,
}

export default NavigationMobile
