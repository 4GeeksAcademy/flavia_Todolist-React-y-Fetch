import React from "react";
import "./botonSwitch.css";

const BotonSwitch = ({ id, isDone }) => {
  return (
    <ul className="tg-list">
      <li className="tg-list-item">
        <input className="tgl tgl-flip" id={id} type="checkbox" />
        <label
          className="tgl-btn"
          data-tg-off="Nope!"
          data-tg-on="Yeah!"
          htmlFor={id}
        ></label>
      </li>
    </ul>
  );
};

export default BotonSwitch;
