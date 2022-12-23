import React from "react";

const Counter = (props) => {
  return (
    <div>
      <p>{props?.counter}</p>
      <button onClick={props?.onIncrement}>+</button>
      <button onClick={props?.onDecrement}>-</button>
      <button onClick={props?.onIncrementByValue}>icrement by value</button>
    </div>
  );
};

export default Counter;
