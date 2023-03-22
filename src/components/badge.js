import React from "react";
import "./badge.css";

const Badges = () => {
  return (
    <div className="badges-container">
      <a href="https://github.com/rfauzi44/vehicle-rental-api">
        <img
          className="badge"
          src="https://img.shields.io/static/v1?label=rfauzi44&message=vehicle-rental-api&color=blue&logo=go&style=for-the-badge"
          alt="Go repository badge"
        />
      </a>
      <a href="https://github.com/rfauzi44/vehicle-rental-web">
        <img
          className="badge"
          src="https://img.shields.io/static/v1?label=rfauzi44&message=vehicle-rental-web&color=blue&logo=react&style=for-the-badge"
          alt="React repository badge"
        />
      </a>
    </div>
  );
};

export default Badges;
