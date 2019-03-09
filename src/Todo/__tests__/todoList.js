import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "../todoList";

// https://airbnb.io/enzyme/

//https://jestjs.io/docs/en/getting-started

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    todos: [],
    onCompleteTask: jest.fn(),
    deleteTodo: jest.fn(),
    status: "all"
  };

  const wrapper = shallow(<TodoList {...props} />);

  return {
    props,
    wrapper
  };
}

describe("Test TodoList", () => {
  it("Check Todo List", () => {
    const { wrapper, props } = setup();
    expect(wrapper.find("div").length).toBe(1);
    const id = new Date().valueOf();
    let newProps = {
      ...props,
      todos: [{ id: id, text: "new Todo", isDone: false }]
    };

    const newWrapper = shallow(<TodoList {...newProps} />);

    expect(newWrapper.find("div").length).toBe(2);

    newProps = {
      ...props,
      todos: [{ id: id, text: "new Todo", isDone: false }],
      status: "completed"
    };

    const newWrapper1 = shallow(<TodoList {...newProps} />);

    expect(newWrapper1.find("div").length).toBe(1);
  });
});
