import React from "react";
import "./tasklist.css";

const TaskList = ({ toDoContent }) => {
  return (
    <div className="toDo">
      <div className="toDoTitle">TO DO LIST</div>
      <div className="toDoContent">
        <span className="toDoTitle">Number of tasks: 0</span>
        <ul className="fa-ul">
          {toDoContent.map((task, index) => (
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
