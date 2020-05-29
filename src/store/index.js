import { createStore, combineReducers } from 'redux';
import todoReducer from '../reducers/todoReducer';
import loggedReducer from '../reducers/loggedReducer';

const rootReducer = combineReducers({ todoReducer, loggedReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
