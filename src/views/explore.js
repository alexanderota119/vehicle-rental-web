import React from "react";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import Vehicle from "../components/vehicle";
import Footer from "../components/footer";
import "./explore.css";

const Explore = (props) => {
  return (
    <div className="explore-container">
      <Helmet>
        <title>Explore - Vehicle Rental Frontend</title>
        <meta property="og:title" content="Explore - Vehicle Rental Frontend" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="explore-container1">
        <input
          type="text"
          placeholder="Search your vehicle"
          className="explore-textinput input"
        />
      </div>
      <Vehicle
        endpoint="category/car"
        listtitle="Cars"
        rootClassName="vehicle-root-class-name"
      ></Vehicle>

      <Vehicle
        endpoint="category/motorbike"
        listtitle="Motorbike"
        rootClassName="vehicle-root-class-name"
      ></Vehicle>
      <Vehicle
        endpoint="category/van"
        listtitle="Van"
        rootClassName="vehicle-root-class-name2"
      ></Vehicle>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  );
};

export default Explore;
