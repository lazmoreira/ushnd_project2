export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";
export const REMOVE_ANSWER_USER = "REMOVE_ANSWER_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addAnswerUser(questionId, option, loggedUser) {
  return {
    type: ADD_ANSWER_USER,
    questionId,
    option,
    loggedUser,
  };
}

export function removeAnswerUser(questionId, option, loggedUser) {
  return {
    type: REMOVE_ANSWER_USER,
    questionId,
    option,
    loggedUser,
  };
}
