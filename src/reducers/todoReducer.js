import { TOGGLE_TODO } from '../actions/types';
import { initialTodos } from '../data';

const initialState = {
  todos: initialTodos,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      const newTodos = state.todos.map((todo) => {
        if (todo.title === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: newTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
