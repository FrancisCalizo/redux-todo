import { TOGGLE_TODO, ADD_TODO } from './types';

export const toggleTodo = (e) => {
  return {
    type: TOGGLE_TODO,
    payload: e.target.id,
  };
};

export const addTodo = (input) => {
  return {
    type: ADD_TODO,
    payload: input,
  };
};
