import React from 'react';

import Todos from './components/Todos';
import Logged from './components/Logged';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Todo List</h1>
      <div style={styles}>
        <Todos />
        <Logged />
      </div>
    </div>
  );
};

const styles = {
  display: 'flex',
  justifyContent: 'space-around',
};

export default App;
