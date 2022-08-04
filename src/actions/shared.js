import { _getUsers, _getQuestions } from "../api/_DATA";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";
import { setLoggedUser } from "./loggedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData(loggedUser) {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        const loggedUser = localStorage.getItem("loggedUser");

        if (loggedUser) {
          dispatch(setLoggedUser(loggedUser));
        }

        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      }
    );
  };
}
