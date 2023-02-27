import React from "react";
import { Link } from 'react-router-dom'
import CurrencyFormat from "react-currency-format";
import { format, parseISO } from 'date-fns'

import "./card.css";

const Card = (props) => {
  return (
    <Link to={`/vehicle/${props.slug}`}>
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
            <span className="card-text4">{format(parseISO(props.created_at), 'PP')}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
