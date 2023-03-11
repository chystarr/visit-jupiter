import React from "react";

import "./css/History.css";
import InfoCard from "./InfoCard";
import galileo from "./img/galileo.jpeg";
import jupiterRings from "./img/jupiter-rings.jpg";
import juno from "./img/juno.jpg";

function History() {
  const headers = ["Galileo's Discovery", "Voyager 1", "Juno"];
  const descriptions = ["Jupiter was first observed by the famous astronomer Galileo Galilei in 1610.",
    "Saturn isn't the only planet with rings. In 1979, the Voyager 1 spacecraft found that Jupiter has rings as well.",
    "In 2016, the Juno spacecraft arrived at Saturn in order to investigate things such as the composition of the planet's atmosphere."];

  return (
    <div className="history-page">
      <InfoCard image={galileo} header={headers[0]} text={descriptions[0]}/>
      <InfoCard image={jupiterRings} header={headers[1]} text={descriptions[1]}/>
      <InfoCard image={juno} header={headers[2]} text={descriptions[2]}/>
    </div>
  );
}

export default History;