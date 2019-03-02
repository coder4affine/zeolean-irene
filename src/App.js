import React, { Component, Fragment } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// uglification

// minification -> remove white space

// Two types of components

// 1. Class Component // statefull component

// 2. Function Component // stateless component

// const App = () => (
//   <Fragment>
//     <h1>Hello World</h1>
//     <h1>Hello World</h1>
//   </Fragment>
// );

//  App -> click listner -> unmount  -> remoe lister  -> Test -> click

class App extends Component {
  state = {
    text: {
      greet: "hello",
      isError: false
    }
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return {
      greet: `${props.text} greet`
    };
  }

  // UNSAFE_componentWillMount() {
  //   console.log("UNSAFE_componentWillMount");
  // }

  // UNSAFE_componentWillReceiveProps() {}

  // UNSAFE_componentWillUpdate() {}

  componentDidMount() {
    document.addEventListener("click", () => {
      console.log("click");
    });

    // this.interval = setInterval(() => {
    //   console.log("hello interval");
    // }, 1000);

    this.firstH1.setAttribute("class", "h1Class");
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return "hello world";
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(snapshot);
    console.log("componentDidUpdate");
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
    document.removeEventListener("click");
  };

  static getDerivedStateFromError(error) {
    return {
      isError: true
    };
  }

  componentDidCatch(error, info) {}

  render() {
    console.log("render");
    return (
      <Fragment>
        <h1
          ref={ref => {
            this.firstH1 = ref;
          }}
        >
          {this.state.text.greet}
        </h1>
        <h1>{this.state.greet}</h1>
        <button
          name="hello"
          onClick={() => {
            this.setState({
              text: { ...this.state.text, greet: "hello world" }
            });
          }}
        >
          Click Me
        </button>
      </Fragment>
    );
  }
}

export default App;
