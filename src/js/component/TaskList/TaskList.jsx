import React from "react";
import "./tasklist.css";
import BotonSwitch from "../BotonSwitch";

const TaskList = ({ list, numbersOfItems }) => {
  return (
    <div className="toDo">
      <div className="toDoTitle">TO DO LIST</div>
      <div className="toDoContent">
        <span>Number of tasks: {numbersOfItems}</span>
        <ul className="fa-ul">
          {list.map((task, index) => (
            <li className="text" key={index}>
              {task.label}{" "}
              <BotonSwitch id={`cb${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
