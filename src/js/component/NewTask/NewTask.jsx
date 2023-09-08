import React from "react";
import "./newtask.css";

const NewTask = ({ opcionSeleccionada, handleOpcionChange }) => {
  return (
    <div className="inputsContainer">
      {/* Comienzo de dropdown */}
      <div>
        <select
          name="opciones"
          value={opcionSeleccionada}
          onChange={handleOpcionChange}
        >
          <option value="empezamos">Select an option</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>
      {/*Fin de dropdown */}
      {/* Comienzo del input donde escribimos la tarea*/}
      <div>
        <textarea
          className="taskContent"
          value=""
          disabled={opcionSeleccionada === "empezamos"}
        ></textarea>
      </div>
      {/* Fin del input donde escribimos la tarea*/}
      {/* Comienzo del submit*/}
      <div>
        <input className="submitButton btn" type="submit" value="Add"></input>
      </div>
      {/* Fin del submit*/}
    </div>
  );
};

export default NewTask;