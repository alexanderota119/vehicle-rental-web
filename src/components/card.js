import React from "react";
import { Link } from 'react-router-dom'

import PropTypes from "prop-types";
import CurrencyFormat from "react-currency-format";

import "./card.css";

const Card = (props) => {
  return (
    <Link to={`/vehicle/${props.id}`}>
      <div className={`card-blog-post-card ${props.rootClassName} `}>
        <img alt="image" src={props.image_src} className="card-image" />
        <div className="card-container">
          <span className="card-text">{props.category}</span>
          <p className="card-text1">{props.name}</p>

          <p className="card-text2">
            <CurrencyFormat
              value={props.price}
              displayType={"text"}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix={"Rp"}
            />{" "}
            / day
          </p>
          <div className="card-container1">
            <div className="card-profile">
              <span className="card-text3">{props.location}</span>
            </div>
            <span className="card-text4">Available</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.defaultProps = {
  location: "Location",
  name: "Vehicle name",
  category: "Category",
  image_src:
    "https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1500",
  rootClassName: "",
  price: " / day",
};

Card.propTypes = {
  location: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  link: PropTypes.string,
  price: PropTypes.string,
};

export default Card;
