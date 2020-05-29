import React from 'react';

const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label htmlFor={todo.title}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
          id={todo.title}
        />
        {todo.title}
      </label>
    </li>
  );
};

export default TodoItem;
