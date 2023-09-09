import React, { useState } from "react";
import "./botonSwitch.css";

const BotonSwitch = ({ index }) => {
  return (
    <ul className="tg-list">
      <li className="tg-list-item">
        <input className="tgl tgl-flip" id={index} type="checkbox" />
        <label
          className="tgl-btn"
          data-tg-off="Nope!"
          data-tg-on="Yeah!"
          htmlFor={index}
        ></label>
      </li>
    </ul>
  );
};

export default BotonSwitch;
