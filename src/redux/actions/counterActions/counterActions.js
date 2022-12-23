import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE } from "../types";

export const incrementAction = async (dispatch) => {
  return dispatch({
    type: INCREMENT,
  });
};
export const decrementAction = async (dispatch) => {
  return dispatch({
    type: DECREMENT,
  });
};

export const incrementByValue = async (dispatch, val) => {
  return dispatch({ type: INCREMENT_BY_VALUE, payload: val });
};
