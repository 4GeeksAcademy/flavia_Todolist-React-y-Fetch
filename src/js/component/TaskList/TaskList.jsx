import React, { useState } from "react";
import "./tasklist.css";
import BotonSwitch from "../BotonSwitch";

const TaskList = ({ list, numbersOfItems, handleDeleteItemClick }) => {
  const [showSwitches, setShowSwitches] = useState(false);

  const toggleSwitches = () => {
    setShowSwitches(!showSwitches);
  };

  return (
    <div className="toDo">
      <div className="toDoTitle">TO DO LIST</div>
      <div className="toDoContent">
        <span>Number of tasks: {numbersOfItems}</span>
        <ul className="fa-ul">
          {list.map((task, index) => (
            <li className="text" key={index}>
              <button
                className="deleteButton"
                onClick={() => handleDeleteItemClick(task.id)}
              >
                <i className="fa-regular fa-trash-can"></i>
              </button>
              {task.label}
              {showSwitches && <BotonSwitch index={`cb${index}`} />}
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
