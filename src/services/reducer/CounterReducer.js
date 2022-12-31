import { DECREMENT, INCREAMENT, RESET } from "../constants/Constants";

const initialState = {
  count: 1,
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default createReducer;
