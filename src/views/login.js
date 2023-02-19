import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Vehicle Rental Frontend</title>
        <meta property="og:title" content="Login - Vehicle Rental Frontend" />
      </Helmet>
      <div className="login-hero">
        <div className="login-container1">
          <h1 className="login-text">Lets Explore The Word</h1>
          <input
            type="email"
            placeholder="Email"
            className="login-textinput input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-textinput1 input"
          />
          <span>Forgot password</span>
          <button className="login-button button">Login</button>
          <span>
            <span>
              Dont have account.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <Link to="/register" className="login-navlink">
              Register now
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
