import React, { useState } from "react";
import "./tasklist.css";
import BotonSwitch from "../BotonSwitch";

const TaskList = ({ list, numbersOfItems }) => {
  const [showSwitches, setShowSwitches] = useState(false);

  const toggleSwitches = () => {
    setShowSwitches(!showSwitches);
  };

  const getIconForTaskId = (taskId) => {
    switch (taskId) {
      case "high":
        return <i className="fa-solid fa-triangle-exclamation"></i>;
      case "medium":
        return <i class="fa-solid fa-hand"></i>;
      case "low":
        return <i class="fa-solid fa-hourglass-start"></i>;
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
              {getIconForTaskId(task.id)} {task.label}
              {showSwitches && <BotonSwitch id={`cb${index}`} />}
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
