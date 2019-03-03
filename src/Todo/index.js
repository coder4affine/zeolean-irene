import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import FilterTodo from "./filterTodo";
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
    // const { todos } = this.state;
    // this.setState({
    //   todos: todos.filter(x => {
    //     if (status === "pending") {
    //       return !x.isDone;
    //     } else if (status === "completed") {
    //       return x.isDone;
    //     } else {
    //       return true;
    //     }
    //   })
    // });
    this.setState({ status });
  };

  render() {
    console.log("render");
    const { error, todo, todos, status } = this.state;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 1024,
          height: "100vh"
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            width: "100%",
            alignItems: "center"
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
            status={status}
            onCompleteTask={this.onCompleteTask}
            deleteTodo={this.deleteTodo}
          />
        </div>
        <FilterTodo filterTodos={this.filterTodos} />
        {/* Create new Component FilterTodo */}
      </div>
    );
  }
}
