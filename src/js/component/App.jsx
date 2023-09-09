import React, { useState, useEffect } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

//create your first component
const App = () => {
  const [list, setList] = useState([]);
  const [textoInsertado, setTextoInsertado] = useState("");
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("empezamos");

  const getList = async () => {
    const response = await fetch(
      "https://playground.4geeks.com/apis/fake/todos/user/flavia"
    );
    const data = await response.json();
    setList(data);
    console.log(data);
  };

  const addItem = async () => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        ...list,
        { label: textoInsertado, done: false, id: opcionSeleccionada },
      ]),
    };

    const response = await fetch(
      "https://playground.4geeks.com/apis/fake/todos/user/flavia",
      options
    );

    if (response.ok) {
      console.log("Tarea añadida exitosamente");
      getList(); // Actualizar la lista después de agregar la tarea
    } else {
      console.error("Error al añadir la tarea");
    }
  };

  useEffect(() => {
    getList(); // Llamar a getData al montar el componente
  }, []);

  const handleOpcionChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  const handleInputChange = (event) => {
    setTextoInsertado(event.target.value);
  };

  const handleButtonClick = () => {
    if (textoInsertado.length > 0) {
      addItem();
    }
    setTextoInsertado("");
  };

  return (
    <>
      <div className="bigContainer">
        <div className="littleContainer">
          <NewTask
            opcionSeleccionada={opcionSeleccionada}
            textoInsertado={textoInsertado}
            handleOpcionChange={handleOpcionChange}
            handleInputChange={handleInputChange}
            handleButtonClick={handleButtonClick}
          />
          <TaskList list={list} numbersOfItems={list.length} />
        </div>
      </div>
    </>
  );
};

export default App;
