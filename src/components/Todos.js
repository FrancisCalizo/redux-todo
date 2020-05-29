import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.title} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default Todos;
