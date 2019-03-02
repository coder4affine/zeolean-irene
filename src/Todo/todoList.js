import React, { memo } from "react";
// import PropTypes from "prop-types";

const todoList = ({ todos, onCompleteTask, deleteTodo }) => {
  console.log("todoList");
  return (
    <div style={{ width: "100%" }}>
      {todos.map(item => (
        <div style={{ display: "flex", padding: 10 }} key={item.id}>
          <input
            type="checkbox"
            defaultChecked={item.isDone}
            value={item.isDone}
            onClick={() => onCompleteTask(item.id)}
          />
          <span
            style={{
              display: "flex",
              flex: 1,
              padding: "0 10px",
              textDecoration: item.isDone ? "line-through" : "none"
            }}
          >
            {item.text}
          </span>
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

todoList.propTypes = {};

export default memo(todoList);
