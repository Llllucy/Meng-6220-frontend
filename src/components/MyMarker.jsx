import React from "react";
import { useNavigate } from "react-router-dom";


const MyMarker = ({ text, tooltip, $hover, lat, lng }) => {
  const navigate = new useNavigate();
  const handleClick = () => {
    navigate(`/restaurant/${lat}/${lng}`);
    console.log(`You clicked on ${tooltip}`);
  };

  return (
    <div className={$hover ? "circle hover" : "circle"}  onClick={handleClick}>
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
  );
};

export default MyMarker;
