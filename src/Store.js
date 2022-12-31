import { createStore } from "redux";
import createReducer from "./services/reducer/CounterReducer";

const store = createStore(createReducer);

export default store;
