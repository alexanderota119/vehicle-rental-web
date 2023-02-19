import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Vehicle from '../components/vehicle'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Vehicle Rental Frontend</title>
        <meta property="og:title" content="Vehicle Rental Frontend" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <h1 className="home-text">Explore and Travel</h1>
        <span className="home-text1">Vehicle Finder</span>
        <div className="home-container1">
          <select className="home-select">
            <option value="Option 1" selected>
              Location
            </option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <select className="home-select1">
            <option value="Option 1">Type</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <select className="home-select2">
            <option value="Option 1">Date</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <button className="home-button button">Search</button>
      </div>
      <Vehicle
        endpoint="all"
        listtitle="Explore our vehicle"
        rootClassName="vehicle-root-class-name"
      ></Vehicle>
      <div className="home-testimonial">
        <h2 className="home-text2">Testimonials</h2>
        <img
          alt="image"
          src="/playground_assets/image%206-300w.png"
          className="home-image"
        />
        <div className="home-testimonial1">
          <div className="home-container2">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className="home-text3">
            <span>
              ”It was the right decision to rent vehicle here, I spent less
              money and enjoy the trip. It was an amazing experience to have a
              ride for wildlife trip!”
            </span>
            <br></br>
          </span>
          <div className="home-container3">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon2">
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
        <span className="home-text6">Edward Newgate</span>
        <span className="home-text7">Founder Circle</span>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Home
