import React from "react";

import "./css/Attractions.css";
import Info from "./Info";
import placeholder from "./img/placeholder.jpg";

function Attractions() {


  return (
    <div>
      <p>This is the attractions page</p>
      <Info image={placeholder}/>
    </div>
  );
}

export default Attractions;