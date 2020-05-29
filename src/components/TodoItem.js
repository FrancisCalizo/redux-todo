import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleTodo } from '../actions/todoActions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <label htmlFor={todo.title}>
        <input
          type="checkbox"
          checked={todo.completed}
          id={todo.title}
          onChange={(e) => dispatch(toggleTodo(e))}
        />
        {todo.title}
      </label>
    </li>
  );
};

export default TodoItem;
