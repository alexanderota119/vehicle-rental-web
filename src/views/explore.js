import React, { useState } from "react";

import Header from "../components/header";
import Vehicle from "../components/vehicle";
import Footer from "../components/footer";
import "./explore.css";

const Explore = () => {
  const [valueSearch, setSearch] = useState("");

  const inputSearch = (el) => {
    setSearch(el.target.value);
  };
  console.log(valueSearch);

  return (
    <div className="explore-container">
      <Header rootClassName="header-root-class-name"></Header>
      <div className="explore-container1">
        <input
          type="text"
          placeholder="Search your vehicle"
          className="explore-textinput input"
          onChange={inputSearch}
        />
        <button className="explore-button input">Search</button>
        <select className="explore-select input">
          <option value="Sort">SORT</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="created_at">Date</option>
        </select>
        <select className="explore-select1 input">
          <option value="Order">ORDER</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </div>
      <Vehicle
        rootClassName="vehicle-root-class-name1"
        endpoint="all"
        listtitle="Our Vehicles"
      ></Vehicle>
      <Vehicle
        rootClassName="vehicle-root-class-name1"
        endpoint="search?s=honda"
        listtitle="Our Vehicles"
      ></Vehicle>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  );
};

export default Explore;
