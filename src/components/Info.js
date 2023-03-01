import React from "react";

function Info({image}) {
    return (
        <div>
            <img src={image} alt="placeholder" />
            <p>This is an info component</p>
        </div>
    );
}

export default Info;