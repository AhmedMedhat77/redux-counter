import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE } from "../actions/types";

export const initialState = {
  count: 0,
};

const countReducers = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT_BY_VALUE:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default countReducers;
