import React, { useState } from "react";

import Header from "../components/header";
import Vehicle from "../components/vehicle";
import Footer from "../components/footer";
import "./explore.css";

const Explore = () => {
  const [valueSearch, setSearch] = useState("");

  const [doSearch, setDoSearch] = useState(false);
  const [doSort, setDoSort] = useState(false);

  const [selectedField, setSelectedField] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const handleFieldChange = (event) => {
    setSelectedField(event.target.value);
    setDoSort(false)
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    setDoSort(true)
  };

  const inputSearch = (el) => {
    setSearch(el.target.value);
    setDoSearch(false);
  };

  const searchCommand = () => {
    setDoSearch(true);
  };

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

        <button className="explore-button input" onClick={searchCommand}>
          Search
        </button>

        <select
          className="explore-select input"
          value={selectedField}
          onChange={handleFieldChange}
        >
          <option value="Sort">SORT</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="created_at">Date</option>
        </select>
        <select
          className="explore-select1 input"
          value={selectedSort}
          onChange={handleSortChange}
        >
          <option value="Order">ORDER</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </div>

      <Vehicle
        rootClassName="vehicle-root-class-name1"
        endpoint={
          doSearch
            ? `search?s=${valueSearch}`
            : doSort
            ? `sort?by=${selectedField}&order=${selectedSort}`
            : "all"
        }
        listtitle="Our Vehicles"
        search={doSearch}
        sort={doSort}
      ></Vehicle>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  );
};

export default Explore;
