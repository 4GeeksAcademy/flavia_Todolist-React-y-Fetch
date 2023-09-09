import React from "react";
import "./tasklist.css";

const TaskList = ({ list, numbersOfItems }) => {
  return (
    <div className="toDo">
      <div className="toDoTitle">TO DO LIST</div>
      <div className="toDoContent">
        <span>Number of tasks: {numbersOfItems}</span>
        <ul className="fa-ul">
          {list.map((task, index) => (
            <li key={index}>
              {task.done ? "✔️" : "❌"} {task.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
