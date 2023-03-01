import React from "react";

function Info({image}) {
  return (
    <div>
      <img src={image} alt="placeholder" />
      <h2>Info component header</h2>
      <p>This is an info component</p>
    </div>
  );
}

export default Info;