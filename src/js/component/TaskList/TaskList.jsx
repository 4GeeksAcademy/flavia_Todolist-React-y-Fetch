import React, { useState } from "react";
import "./tasklist.css";
import BotonSwitch from "../BotonSwitch";

const TaskList = ({ list, numbersOfItems, handleDeleteItemClick }) => {
  const [showSwitches, setShowSwitches] = useState(false);

  const toggleSwitches = () => {
    setShowSwitches(!showSwitches);
  };

  const [switchStates, setSwitchStates] = useState(
    list.map(() => false) // Inicializa todos los interruptores en falso
  );
  const handleSwitchToggle = (index) => {
    const newSwitchStates = [...switchStates];
    newSwitchStates[index] = !newSwitchStates[index];
    setSwitchStates(newSwitchStates);
  };

  const getIconForTaskPriority = (priority) => {
    switch (priority) {
      case "high":
        return <i className="fa-solid fa-triangle-exclamation"></i>;
      case "medium":
        return <i className="fa-solid fa-hand"></i>;
      case "low":
        return <i className="fa-solid fa-hourglass-start"></i>;
      default:
        return null;
    }
  };

  return (
    <div className="toDo">
      <div className="toDoTitle">TO DO LIST</div>
      <div className="toDoContent">
        <span>Number of tasks: {numbersOfItems}</span>
        <ul className="fa-ul">
          {list.map((task, index) => (
            <li className="text" key={index}>
              {showSwitches && (
                <BotonSwitch
                  index={`cb${index}`}
                  isChecked={switchStates[index]}
                  handleToggle={() => handleSwitchToggle(index)}
                />
              )}
              {task.label}
              {getIconForTaskPriority(task.priority)}
              {console.log(task.priority)}
              <button
                className="deleteButton"
                onClick={() => handleDeleteItemClick(task.id)}
              >
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button className="switchButton" onClick={toggleSwitches}>
        {showSwitches ? "Hide task status" : "Show task status"}
      </button>
    </div>
  );
};

export default TaskList;
