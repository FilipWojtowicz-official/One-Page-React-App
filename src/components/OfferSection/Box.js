import React from "react";
import "./Box.css";

const Box = ({ name, isNew }) => {
  return (
    <div className={isNew ? "box with-dot" : "box"}>
      <p className="service">{name}</p>
      {isNew ? <p className="new">(nowość)</p> : null}
    </div>
  );
};

export default Box;
