import { combineReducers } from "redux";
import { dogReducer } from "./dogReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  //All reducers will be here
  dogReducer: dogReducer,
  authReducer: authReducer,
});
export default rootReducer;
