import React, { useState, useEffect } from "react";
import "./tasklist.css";
import BotonSwitch from "../BotonSwitch";

const TaskList = ({ list, numbersOfItems, handleDeleteItemClick }) => {
  const [showSwitches, setShowSwitches] = useState(false);
  const [sortedList, setSortedList] = useState([...list]);
  const [sortByPriority, setSortByPriority] = useState(false);

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
        return (
          <i className="fa-solid fa-triangle-exclamation ms-4 text-danger"></i>
        );
      case "medium":
        return <i className="fa-solid fa-hand ms-4 text-warning-emphasis"></i>;
      case "low":
        return (
          <i className="fa-solid fa-hourglass-start ms-4 text-success"></i>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (sortByPriority) {
      const sorted = [...list];
      sorted.sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
      setSortedList(sorted);
    } else {
      // Si no se ordena, muestra la lista original
      setSortedList([...list]);
    }
  }, [list, sortByPriority]);

  return (
    <div className="toDo">
      <div className="toDoContent">
        <div className="d-flex justify-content-between ms-3 me-3 mb-2">
          <span>Number of tasks: {numbersOfItems}</span>
          <button
            className="sortButton"
            onClick={() => setSortByPriority(!sortByPriority)}
          >
            {sortByPriority ? "Original order" : "Order by Priority"}{" "}
          </button>
        </div>
        <ul>
          {sortedList.map((task, index) => (
            <li className="text" key={index}>
              <div className="divSwitch">
                {showSwitches && (
                  <BotonSwitch
                    index={`cb${index}`}
                    isChecked={switchStates[index]}
                    handleToggle={() => handleSwitchToggle(index)}
                  />
                )}
              </div>
              {task.label}
              {getIconForTaskPriority(task.priority)}
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
