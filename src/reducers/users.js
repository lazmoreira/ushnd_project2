import {
  RECEIVE_USERS,
  ADD_ANSWER_USER,
  REMOVE_ANSWER_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_ANSWER_USER:
      return {
        ...state,
        [action.loggedUser]: {
          ...state[action.loggedUser],
          answers: {
            ...state[action.loggedUser].answers,
            [action.questionId]: action.option,
          },
        },
      };

    case REMOVE_ANSWER_USER:
      return {
        ...state,
        [action.loggedUser]: {
          ...state[action.loggedUser],
          answers: {
            ...state[action.loggedUser].answers.filter(
              (question) => question !== action.questionId
            ),
          },
        },
      };

    default:
      return state;
  }
}
