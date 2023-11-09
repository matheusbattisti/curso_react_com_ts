import React from "react";

const Task = ({ task, onDelete, onToggleDone }) => {
  return (
    <li>
      <span
        onClick={onToggleDone}
        style={{
          textDecoration: task.done ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>
      <button onClick={onDelete}>Remover</button>
    </li>
  );
};

export default Task;
