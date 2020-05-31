import React from 'react';
// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
  };
};

const Todos = ({ todos }) => {
  // const todos = useSelector((state) => state.todoReducer.todos);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.title} todo={todo} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Todos);
