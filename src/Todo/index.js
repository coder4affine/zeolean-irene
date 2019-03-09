import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import FilterTodo from "./filterTodo";
import ErrorBoundary from "../component/ErrorBoundary";
import test from "../HOC/test";
// Import FilterTodo here

// https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/

// https://reactjs.org/docs/typechecking-with-proptypes.html

class index extends PureComponent {
  static propTypes = {};

  state = {
    error: false,
    todo: "",
    todos: [],
    status: "all"
  };

  componentDidMount = async () => {
    try {
      const res = await fetch("http://localhost:3004/todos");
      const todos = await res.json();
      this.setState({ todos });
    } catch (error) {
      this.setState({ error });
    }
    // fetch("http://localhost:3004/todos")
    //   .then(res => {
    //     console.log(
    //       res.json().then(data => {
    //         this.setState({ todos: data });
    //       })
    //     );
    //   })
    //   .catch(error => {
    //     this.setState({ error });
    //   });
  };

  onChange = e => {
    this.setState({ todo: e.target.value });
  };

  onAddTodo = async e => {
    e.preventDefault();
    const { todo, todos } = this.state;
    if (!todo) {
      this.setState({ error: "Required" });
      return;
    }

    try {
      const newTodo = { id: new Date().valueOf(), text: todo, isDone: false };
      await fetch("http://localhost:3004/todos", {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(newTodo)
      });
      this.setState({
        todos: [...todos, newTodo],
        todo: ""
      });
    } catch (error) {}
  };

  onCompleteTask = async id => {
    const { todos } = this.state;
    const index = todos.findIndex(x => x.id === id);
    const updatedTodo = { ...todos[index], isDone: !todos[index].isDone };
    await fetch(`http://localhost:3004/todos/${todos[index].id}`, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify(updatedTodo)
    });

    const newTodos = [
      ...todos.slice(0, index),
      updatedTodo,
      ...todos.slice(index + 1)
    ];
    this.setState({ todos: newTodos });
  };

  deleteTodo = async id => {
    const { todos } = this.state;
    await fetch(`http://localhost:3004/todos/${id}`, {
      method: "DELETE"
    });
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
      <ErrorBoundary>
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
        </div>
      </ErrorBoundary>
    );
  }
}

export default test(index);
