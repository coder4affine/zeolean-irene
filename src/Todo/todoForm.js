import React, { memo } from "react";
import PropTypes from "prop-types";
import test from "../HOC/test";

const todoForm = ({ onAddTodo, todo, error, onChange }) => {
  console.log("todoForm");
  return (
    <form onSubmit={onAddTodo}>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            style={{ height: 24 }}
            type="text"
            value={todo}
            onChange={onChange}
            placeholder="Write your to-do"
          />
          {error && <span style={{ fontSize: 11, color: "red" }}>{error}</span>}
        </div>
        <input style={{ height: 30 }} type="submit" value="Add To-DO" />
      </div>
    </form>
  );
};

todoForm.defaultProps = {
  todo: ""
};

todoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  todo: PropTypes.string,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default memo(test(todoForm));
