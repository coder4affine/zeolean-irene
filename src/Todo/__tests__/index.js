import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Todo from '../index';
import TodoForm from '../todoForm';
import TodoList from '../todoList';
import FilterTodo from '../filterTodo';

// https://airbnb.io/enzyme/

// https://jestjs.io/docs/en/getting-started

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {};

  const wrapper = shallow(<Todo {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('snapshot', () => {
  it('snapshot of todo', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('test todo component', () => {
  it('check for the components', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h1').text()).toBe('My To-do');
    const state = wrapper.state();

    expect(wrapper.find(TodoForm).props()).toEqual({
      error: state.error,
      onAddTodo: expect.any(Function),
      onChange: expect.any(Function),
      todo: state.todo,
    });

    expect(wrapper.find(TodoList).props()).toEqual({
      todos: state.todos,
      status: state.status,
      onCompleteTask: expect.any(Function),
      deleteTodo: expect.any(Function),
    });

    expect(wrapper.find(FilterTodo).props()).toEqual({
      filterTodos: expect.any(Function),
    });
  });

  it('check TodoForms onChange function', () => {
    const { wrapper } = setup();
    const Form = wrapper.find(TodoForm);
    Form.props().onChange({ target: { value: 'my todos' } });
    expect(wrapper.state('todo')).toEqual('my todos');
  });

  it('check TodoForms onChange function', () => {
    const { wrapper } = setup();
    const Form = wrapper.find(TodoForm);
    Form.props().onAddTodo({ preventDefault: jest.fn() });
    expect(wrapper.state('error')).toEqual('Required');
    wrapper.setState({ todo: 'New todo' });
    Form.props().onAddTodo({ preventDefault: jest.fn() });
    expect(wrapper.state('todos').length).toEqual(1);
    wrapper.setState({ todo: 'New todo1' });
    Form.props().onAddTodo({ preventDefault: jest.fn() });
    expect(wrapper.state('todos').length).toEqual(2);
  });

  it('check FilterTodo component', () => {
    const { wrapper } = setup();
    const filterTodo = wrapper.find(FilterTodo);
    expect(wrapper.state('status')).toEqual('all');
    filterTodo.props().filterTodos('pending');
    expect(wrapper.state('status')).toEqual('pending');
  });
});
