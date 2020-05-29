import React, { useState } from 'react';

import { initialTodos } from './data';
import Todos from './components/Todos';

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (e) => {
    const newTodos = todos.map((todo) => {
      if (todo.title === e.target.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Todos todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
