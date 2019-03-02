import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
// Import FilterTodo here

// https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/

export default class index extends PureComponent {
  static propTypes = {};

  state = {
    error: false,
    todo: "",
    todos: [],
    status: "all"
  };

  onChange = e => {
    this.setState({ todo: e.target.value });
  };

  onAddTodo = e => {
    e.preventDefault();
    const { todo, todos } = this.state;
    if (!todo) {
      this.setState({ error: "Required" });
      return;
    }
    this.setState({
      todos: [
        ...todos,
        { id: new Date().valueOf(), text: todo, isDone: false }
      ],
      todo: ""
    });
  };

  onCompleteTask = id => {
    const { todos } = this.state;
    const index = todos.findIndex(x => x.id === id);
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], isDone: !todos[index].isDone },
      ...todos.slice(index + 1)
    ];
    this.setState({ todos: newTodos });
  };

  deleteTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(x => x.id !== id)
    });
  };

  filterTodos = status => {
    // filter
  };

  render() {
    console.log("render");
    const { error, todo, todos } = this.state;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 1024
        }}
      >
        <h1>My To-do</h1>
        <TodoForm
          onAddTodo={this.onAddTodo}
          todo={todo}
          error={error}
          onChange={this.onChange}
        />
        <TodoList
          todos={todos}
          onCompleteTask={this.onCompleteTask}
          deleteTodo={this.deleteTodo}
        />

        {/* Create new Component FilterTodo */}
      </div>
    );
  }
}
