import React from "react";

function InfoCard({image, header, text}) {
  return (
    <div className="info-card">
      <img src={image} alt="placeholder" />
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
}

export default InfoCard;