import React, { useState } from "react";

const App = () => {
  let [state, setState] = useState(0);
  function Increment() {
    setState(state + 1);
  }
  function decrement() {
    if (state > 0) {
      setState(state - 1);
    }
  }
  function reset() {
    setState(0);
  }
  return (
    <>
      <div>
        <p>{state}</p>
        <button onClick={Increment}>+ </button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};

export default App;
