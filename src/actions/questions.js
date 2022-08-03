import { _saveQuestionAnswer } from "../api/_DATA";
import { addAnswerUser, removeAnswerUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const REMOVE_ANSWER = "REMOVE_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function answerQuestion(questionId, option, loggedUser) {
  return {
    type: ANSWER_QUESTION,
    questionId,
    option,
    loggedUser,
  };
}

function removeAnswer(questionId, option, loggedUser) {
  return {
    type: REMOVE_ANSWER,
    questionId,
    option,
    loggedUser,
  };
}

export function handleAnswerQuestion(questionId, option, loggedUser) {
  return (dispatch) => {
    dispatch(answerQuestion(questionId, option, loggedUser));
    dispatch(addAnswerUser(questionId, option, loggedUser));

    return _saveQuestionAnswer({
      authedUser: loggedUser,
      qid: questionId,
      answer: option,
    }).catch((e) => {
      console.warn("Error in handleAnswerQuestion: ", e);
      dispatch(removeAnswer(questionId, option, loggedUser));
      dispatch(removeAnswerUser(questionId, option, loggedUser));
      alert("There was an error answering the question. Please try again.");
    });
  };
}
