import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - Vehicle Rental Frontend</title>
        <meta
          property="og:title"
          content="Register - Vehicle Rental Frontend"
        />
      </Helmet>
      <div className="register-hero">
        <div className="register-container1">
          <h1 className="register-text">Lets Explore The Word</h1>
          <input
            type="text"
            required
            placeholder="Full Name"
            className="register-textinput input"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="register-textinput1 input"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="register-textinput2 input"
          />
          <button className="register-button button">Sign Up</button>
          <span>
            <span>
              Already have account.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <Link to="/login" className="register-navlink">
              Login here
            </Link>
            <span>.</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
