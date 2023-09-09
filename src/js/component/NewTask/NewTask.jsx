import React from "react";
import "./newtask.css";

const NewTask = ({
  prioridadSeleccionada,
  textoInsertado,
  handlePriorityChange,
  handleInputChange,
  handleButtonClick,
}) => {
  return (
    <div className="inputsContainer">
      {/* Comienzo de dropdown */}
      <div>
        <select
          name="opciones"
          value={prioridadSeleccionada}
          onChange={handlePriorityChange}
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
          value={textoInsertado}
          onChange={handleInputChange}
          disabled={prioridadSeleccionada === "empezamos"}
        ></textarea>
      </div>
      {/* Fin del input donde escribimos la tarea*/}
      {/* Comienzo del submit*/}
      <div>
        <input
          className="submitButton btn"
          type="submit"
          value="Add"
          onClick={handleButtonClick}
        ></input>
      </div>
      {/* Fin del submit*/}
    </div>
  );
};

export default NewTask;
