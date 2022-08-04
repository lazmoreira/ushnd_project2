import { RECEIVE_USERS } from "../actions/users";
import {
  ANSWER_QUESTION,
  REMOVE_ANSWER,
  ADD_QUESTION,
} from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ANSWER_QUESTION:
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

    case REMOVE_ANSWER:
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

    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat(question.id),
        },
      };

    default:
      return state;
  }
}
