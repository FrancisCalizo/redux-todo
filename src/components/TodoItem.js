import React from 'react';
// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (e) => dispatch(toggleTodo(e)),
  };
};

const TodoItem = ({ todo, toggleTodo }) => {
  // const dispatch = useDispatch();

  return (
    <li style={{ listStyleType: 'none' }}>
      <label htmlFor={todo.title}>
        <input
          type="checkbox"
          checked={todo.completed}
          id={todo.title}
          onChange={(e) => toggleTodo(e)}
        />
        {todo.title}
      </label>
    </li>
  );
};

export default connect(null, mapDispatchToProps)(TodoItem);
