import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  REMOVE_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ANSWER_QUESTION:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.option]: {
            ...state[action.questionId][action.option],
            votes: state[action.questionId][action.option].votes.concat(
              action.loggedUser
            ),
          },
        },
      };

    case REMOVE_ANSWER:
      return {
        ...state,
        [action.questionId]: {
          [action.option]: {
            votes: state[action.questionId][action.option].votes.filter(
              (user) => user !== action.loggedUser
            ),
          },
        },
      };

    default:
      return state;
  }
}
