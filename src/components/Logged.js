import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logMeIn, logMeOut } from '../actions/loggedActions';

const Logged = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.loggedReducer.logged);

  return (
    <div>
      <h3>{logged ? 'You are logged in' : 'You are not logged in'}</h3>
      <button onClick={() => dispatch(logMeIn())}>Log in</button>
      <button onClick={() => dispatch(logMeOut())}>Log Out</button>
    </div>
  );
};

export default Logged;
