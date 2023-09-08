import React, { useState, useEffect } from "react";

//create your first component
const App = () => {
  const [data, setData] = useState([]);
  const [textoInsertado, setTextoInsertado] = useState("");

  const getData = async () => {
    const response = await fetch(
      "https://playground.4geeks.com/apis/fake/todos/user/flavia"
    );
    const data = await response.json();
    setData(data);
  };

  const addData = async () => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([...data, { label: textoInsertado, done: false }]),
    };

    const response = await fetch(
      "https://playground.4geeks.com/apis/fake/todos/user/flavia",
      options
    );

    if (response.ok) {
      console.log("Tarea añadida exitosamente");
      getData(); // Actualizar la lista después de agregar la tarea
    } else {
      console.error("Error al añadir la tarea");
    }
  };

  useEffect(() => {
    getData(); // Llamar a getData al montar el componente
  }, []);

  return (
    <div>
      <input
        onChange={(e) => setTextoInsertado(e.target.value)}
        value={textoInsertado}
      />
      <button onClick={addData}>Hacer petición</button>
      {data && (
        <div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
