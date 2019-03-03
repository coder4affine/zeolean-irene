import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Todo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const sum = (a, b) => a + b;

describe("test sum", () => {
  it("check sum value", () => {
    expect(sum(1, 3)).toEqual(4);
  });

  test("check sum value using test ", () => {
    expect(sum(1, 3)).toEqual(4);
  });
});
