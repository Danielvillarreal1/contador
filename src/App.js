import React from 'react';
import CounterApp from './CounterApp';

function App() {
  const divStyle = {
    color: 'green',

  };
 

  return (
    <div style={divStyle}>
      <CounterApp />
    </div>
  );
}

export default App;
