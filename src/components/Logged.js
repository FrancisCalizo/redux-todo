import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';

import { logMeIn, logMeOut } from '../actions/loggedActions';

const mapPropsToState = (state) => {
  return {
    logged: state.loggedReducer.logged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logMeIn: () => dispatch(logMeIn()),
    logMeOut: () => dispatch(logMeOut()),
  };
};

const Logged = ({ logged, logMeIn, logMeOut }) => {
  // const dispatch = useDispatch();
  // const logged = useSelector((state) => state.loggedReducer.logged);

  return (
    <div>
      <h3>{logged ? 'You are logged in' : 'You are not logged in'}</h3>
      {/* <button onClick={() => dispatch(logMeIn())}>Log in</button> */}
      {/* <button onClick={() => dispatch(logMeOut())}>Log Out</button> */}
      <button onClick={() => logMeIn()}>Log in</button>
      <button onClick={() => logMeOut()}>Log Out</button>
    </div>
  );
};

export default connect(mapPropsToState, mapDispatchToProps)(Logged);
