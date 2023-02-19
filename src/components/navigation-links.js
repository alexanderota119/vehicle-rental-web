import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.text}
      </Link>
      <Link to="/explore" className="navigation-links-navlink1">
        {props.text1}
      </Link>
      <span className="navigation-links-text">{props.text2}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text: 'Home',
  text1: 'Explore',
  text2: 'History',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
