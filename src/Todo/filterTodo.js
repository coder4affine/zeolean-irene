import React, { memo } from "react";
import PropTypes from "prop-types";

const filterTodo = ({ filterTodos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: 30,
        width: "100%"
      }}
    >
      <button
        style={{ display: "flex", flex: 1, justifyContent: "center" }}
        onClick={() => filterTodos("all")}
      >
        All
      </button>
      <button
        style={{ display: "flex", flex: 1, justifyContent: "center" }}
        onClick={() => filterTodos("pending")}
      >
        Pending
      </button>
      <button
        style={{ display: "flex", flex: 1, justifyContent: "center" }}
        onClick={() => filterTodos("completed")}
      >
        Completed
      </button>
    </div>
  );
};

filterTodo.propTypes = {};

export default memo(filterTodo);
