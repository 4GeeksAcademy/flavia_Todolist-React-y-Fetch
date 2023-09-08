import React from "react";
import "./tasklist.css";

const TaskList = () => {
  return (
    <div className="toDo">
      <div className="toDoTitle">TO DO LIST</div>
      <div className="toDoContent">
        <span className="toDoTitle">Number of tasks: 0</span>
        <ul className="fa-ul">
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
