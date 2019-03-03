import React, { memo } from "react";
import PropTypes from "prop-types";
import Tooltip from "../component/Tooltip";

const filterTodo = ({ filterTodos }) => {
  console.log("filterTodo");
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
        <Tooltip text="Display all todos">All</Tooltip>
      </button>
      <button
        style={{ display: "flex", flex: 1, justifyContent: "center" }}
        onClick={() => filterTodos("pending")}
      >
        <Tooltip text="Display pending todos">Pending</Tooltip>
      </button>
      <button
        style={{ display: "flex", flex: 1, justifyContent: "center" }}
        onClick={() => filterTodos("completed")}
      >
        <Tooltip text="Display completed todos">Completed</Tooltip>
      </button>
    </div>
  );
};

filterTodo.propTypes = {
  filterTodos: PropTypes.func.isRequired
};

export default memo(filterTodo);
