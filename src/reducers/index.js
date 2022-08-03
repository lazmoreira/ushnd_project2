import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import loggedUser from "./loggedUser";
import users from "./users";
import questions from "./questions";

export default combineReducers({
  loggedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
});
