import React from "react";

import "./css/Attractions.css";
import InfoCard from "./InfoCard";
import northPole from "./img/north-pole.jpg";
import greateRedSpot from "./img/great-red-spot.jpg";
import europa from "./img/europa.jpg";

function Attractions() {
  const headers = ["Great Red Spot", "North Pole", "Europa"];
  const descriptions = ["Jupiter's Great Red Spot is an anticyclonic storm near the planet's equator. It's the largest such storm known to exist in the solar system, and it was first observed nearly 400 years ago.",
    "Jupiter also has many other eye-catching storms, many of which can be found on the planet's north pole. NASA's Juno mission recorded information about many of them in 2022.",
    "If you're looking for a change of scenery during your trip, or perhaps just some solid ground to stand on, Europa is an excellent choice. It's one of Jupiter's several moons, and it has an icy surface."];

  return (
    <div className="attractions-page">
      <InfoCard image={greateRedSpot} header={headers[0]} text={descriptions[0]}/>
      <InfoCard image={northPole} header={headers[1]} text={descriptions[1]}/>
      <InfoCard image={europa} header={headers[2]} text={descriptions[2]}/>

    </div>
  );
}

export default Attractions;