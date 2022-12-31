import { DECREMENT, INCREAMENT, RESET } from "../constants/Constants";

export const decreamentCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const resetCounter = () => {
  return {
    type: RESET,
  };
};

export const increamentCounter = () => {
  return {
    type: INCREAMENT,
  };
};
