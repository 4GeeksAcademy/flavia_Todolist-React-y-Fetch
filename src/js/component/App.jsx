import React, { useState } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

//create your first component
const App = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("empezamos"); //Estado para controlar la opción que se elige

  //Función para controlar la opción elegida
  const handleOpcionChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };
  console.log(opcionSeleccionada);

  return (
    <div className="text-center">
      <NewTask
        opcionSeleccionada={opcionSeleccionada}
        handleOpcionChange={handleOpcionChange}
      />
      <TaskList />
    </div>
  );
};

export default App;
