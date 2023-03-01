import React from "react";

function Info({image, header, text}) {
  return (
    <div>
      <img src={image} alt="placeholder" />
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Info;