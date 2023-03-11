import React from "react";

import "./css/Visit.css";
import InfoCard from "./InfoCard";
import spaceship from "./img/spaceship.jpg";
import jupiterPhoto from "./img/jupiter-photo.jpg";

function Visit() {
  const headers = ["Transportation", "Travel Alternatives"];
  const descriptions = ["Space travel to Jupiter is unfortunately not available at this time. Please check back in a few decades for updates.",
    "In the meantime, many space probes have been or are currently capturing interesting pictures of Jupiter that can be enjoyed as they gather data on the planet and on surrounding areas in space."];

  return (
    <div className="visit-page">
      <InfoCard image={spaceship} header={headers[0]} text={descriptions[0]}/>
      <InfoCard image={jupiterPhoto} header={headers[1]} text={descriptions[1]}/>
    </div>
  );
}

export default Visit;