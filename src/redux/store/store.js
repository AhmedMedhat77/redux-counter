import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import countReducers from "../reducers/countReducers";

const store = configureStore(
  {
    reducer: { counter: countReducers },
  },
  applyMiddleware(reduxThunk)
);

export default store;
