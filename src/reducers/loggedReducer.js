import { LOG_ME_IN, LOG_ME_OUT } from '../actions/types';

const initialState = {
  logged: false,
};

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_ME_IN:
      return {
        logged: true,
      };
    case LOG_ME_OUT:
      return {
        logged: false,
      };
    default:
      return state;
  }
};

export default loggedReducer;
