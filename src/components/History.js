import React from "react";

import "./css/History.css";
import Info from "./Info";
import placeholder from "./img/placeholder.jpg";

function History() {
  const header = "Info component header example!!";
  const text = "Some information about Jupiter. It's a planet in outer space. It's a gas planet. Some information about Jupiter. It's a planet in outer space. It's a gas planet. Some information about Jupiter. It's a planet in outer space. It's a gas planet. Some information about Jupiter. It's a planet in outer space. It's a gas planet.";

  return (
    <div>
      <Info image={placeholder} header={header} text={text}/>
      <Info image={placeholder} header={header} text={text}/>
      <Info image={placeholder} header={header} text={text}/>
    </div>
  );
}

export default History;