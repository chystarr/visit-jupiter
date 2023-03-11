import React from "react";

import "./css/Visit.css";
import InfoCard from "./InfoCard";
import placeholder from "./img/placeholder.jpg";

function Visit() {
  const header = "Info component header example!!";
  const text = "Some information about Jupiter. It's a planet in outer space. It's a gas planet. Some information about Jupiter. It's a planet in outer space. It's a gas planet. Some information about Jupiter. It's a planet in outer space. It's a gas planet. Some information about Jupiter. It's a planet in outer space. It's a gas planet.";

  return (
    <div className="visit-page">
      <InfoCard image={placeholder} header={header} text={text}/>
      <InfoCard image={placeholder} header={header} text={text}/>
      <InfoCard image={placeholder} header={header} text={text}/>
    </div>
  );
}

export default Visit;