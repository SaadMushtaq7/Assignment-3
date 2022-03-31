import { combineReducers } from "redux";
import timeReducer from "./timeReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  users: userReducer,
  workingTime: timeReducer,
});

export default reducers;
