import { TOGGLE_TODO } from './types';

export const toggleTodo = (e) => {
  return {
    type: TOGGLE_TODO,
    payload: e.target.id,
  };
};
