import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  console.log(count);
  const handleIncreament = () => {};
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncreament}>Increament</button>
    </div>
  );
};

export default Counter;
