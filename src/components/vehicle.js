import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import axios from "axios";

import Card from "./card";
import "./vehicle.css";

const Vehicle = (props) => {


  const [vehicle, setVehicle] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/vehicle/${props.endpoint}`);

      setVehicle(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`vehicle-vehicle ${props.rootClassName} `}>
      <div className="vehicle-container">
        <h1 className="vehicle-text">{props.listtitle}</h1>
        <div className="vehicle-container1">

        {vehicle.map((e) => {
            return <Card id={e.vehicle_id} name={e.name} category={e.category} location={e.location} image_src={e.image} price={e.price}/>;
          })}


        </div>
      </div>
    </div>
  );
};

Vehicle.defaultProps = {
  listtitle: "Vehicle",
  rootClassName: "",
};

Vehicle.propTypes = {
  listtitle: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default Vehicle;




