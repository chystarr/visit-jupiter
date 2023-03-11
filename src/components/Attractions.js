import React from "react";

import "./css/Attractions.css";
import InfoCard from "./InfoCard";
import placeholder from "./img/placeholder.jpg";

function Attractions() {
  const header = "Info component header example!!";
  const text = "Some information about Jupiter. It's a planet in outer space. It's a gas planet. Some information about Jupiter. It's a planet in outer space. It's a gas planet. Some information about Jupiter. It's a planet in outer space. It's a gas planet. Some information about Jupiter. It's a planet in outer space. It's a gas planet.";

  return (
    <div>
      <InfoCard image={placeholder} header={header} text={text}/>
      <InfoCard image={placeholder} header={header} text={text}/>
      <InfoCard image={placeholder} header={header} text={text}/>
    </div>
  );
}

export default Attractions;