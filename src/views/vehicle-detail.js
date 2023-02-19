import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

import Header from "../components/header";
import Footer from "../components/footer";
import "./vehicle-detail.css";

const VehicleDetail = () => {
  const [vehicle, setData] = useState({});
  const params = useParams();

  async function getData() {
    try {
      const response = await axios.get(
        `http://localhost:3001/vehicle/${params.id}`
      );
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="vehicle-detail-container">
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="vehicle-detail-pricing">
        <div className="vehicle-detail-container1">
          <div className="vehicle-detail-container2">
            <h1>{vehicle.name}</h1>
            <span className="vehicle-detail-text1">{vehicle.description}</span>
            <img
              src={vehicle.image}
              alt="image"
              className="vehicle-detail-image"
            />
          </div>
          <div className="vehicle-detail-container3">
            <div className="vehicle-detail-container4">
              <span className="vehicle-detail-text2">


              <CurrencyFormat value={vehicle.price} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"}/> / day
              </span>
              <span className="vehicle-detail-text3">Location: {vehicle.location}</span>
              <span className="vehicle-detail-text4">Category: {vehicle.category}</span>
              <span className="vehicle-detail-text5">
                <span className="vehicle-detail-text6">Capacity:</span>
                <span> 2</span>
              </span>
              <button className="vehicle-detail-button button">Booking</button>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  );
};

export default VehicleDetail;
