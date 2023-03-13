import * as types from "../types";

//reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null,
};

export function dogReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_DOG_REQUESTED:
      return { ...state, fetching: true, error: null };
    case types.GET_DOG_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
    case types.GET_DOG_FAILURE:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
}
