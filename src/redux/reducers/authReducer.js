import * as types from "../types";

//reducer with initial state
const initialState = {
  loading: false,
  user: true,
  isLoggedIn: false,
  role: "Admin", //"Admin", "Security", "HouseOwner"
  JWTtoken: null,
  error: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_AUTH_REQUESTED:
      return { ...state, loading: true };
    case types.GET_AUTH_SUCCESS:
      return { ...state, loading: false, user: action.user };
    case types.GET_AUTH_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
