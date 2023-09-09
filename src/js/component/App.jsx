import React, { useState, useEffect } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

//create your first component
const App = () => {
  const [list, setList] = useState([]);
  const [textoInsertado, setTextoInsertado] = useState("");
  const [prioridadSeleccionada, setPrioridadSeleccionada] =
    useState("empezamos");

  const getList = async () => {
    const response = await fetch(
      "https://playground.4geeks.com/apis/fake/todos/user/flavia"
    );
    const data = await response.json();
    setList(data);
    console.log(data);
  };

  const addItem = async () => {
    const newItem = {
      label: textoInsertado,
      done: false,
      id: list.length + 1,
      priority: prioridadSeleccionada,
    };

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([...list, newItem]),
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
    getList(); // Llamar a getList al montar el componente
  }, []);

  const handlePriorityChange = (event) => {
    setPrioridadSeleccionada(event.target.value);
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

  const handleDeleteItemClick = async (id) => {
    // Filtra la lista para excluir el elemento con el ID especificado
    const updatedList = list.filter((task) => task.id !== id);
    setList(updatedList);

    // Envía la lista actualizada a la API
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedList),
    };

    await fetch(
      "https://playground.4geeks.com/apis/fake/todos/user/flavia",
      options
    ).then((response) => {
      if (!response.ok) {
        console.error("Error al actualizar la lista en la API");
      }
    });
  };

  return (
    <>
      <div className="bigContainer">
        <div className="littleContainer">
          <NewTask
            prioridadSeleccionada={prioridadSeleccionada}
            textoInsertado={textoInsertado}
            handlePriorityChange={handlePriorityChange}
            handleInputChange={handleInputChange}
            handleButtonClick={handleButtonClick}
          />
          <TaskList
            list={list}
            setList={setList}
            numbersOfItems={list.length}
            handleDeleteItemClick={handleDeleteItemClick}
          />
        </div>
      </div>
    </>
  );
};

export default App;
