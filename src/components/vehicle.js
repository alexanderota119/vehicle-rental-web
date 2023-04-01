import React, { useEffect, useState } from "react";
import useApi from "../helpers/useApi";
import Card from "./card";
import "./vehicle.css";

const Vehicle = (props) => {


  const api = useApi()

  const [vehicle, setVehicle] = useState([]);

  async function getData() {
    try {
      const response = await api.requests({
        method: 'GET',
        url: `/vehicle/${props.endpoint}`
      })

      setVehicle(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (props.search) {
      getData();
      // props.search = false
    }

  }, [props.search]);

  useEffect(() => {
    if (props.sort) {
      getData();
      // props.sort = false
    }

  }, [props.sort]);

  // console.log(props.search)

  return (
    <div className={`vehicle-vehicle ${props.rootClassName} `}>
      <div className="vehicle-container">
        <h1 className="vehicle-text">{props.listtitle}</h1>
        <div className="vehicle-container1">

        {vehicle.map((e) => {
            return <Card id={e.vehicle_id} name={e.name} category={e.category} location={e.location} image_src={e.image} price={e.price} slug={e.slug} created_at={e.created_at}/>;
          })}


        </div>
      </div>
    </div>
  );
};

export default Vehicle;




