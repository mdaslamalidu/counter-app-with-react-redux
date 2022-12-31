import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreamentCounter,
  increamentCounter,
  resetCounter,
} from "../services/action/actionCounter";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncreament = () => {
    dispatch(increamentCounter());
  };
  const handleDecreament = () => {
    dispatch(decreamentCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div>
      <h1>Welcome to React-Redux</h1>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>decreament</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Counter;
