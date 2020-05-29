import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.title} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
