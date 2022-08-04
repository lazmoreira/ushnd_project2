import { _saveQuestionAnswer, _saveQuestion } from "../api/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const REMOVE_ANSWER = "REMOVE_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

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

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    const question = { optionOneText, optionTwoText, author };

    return _saveQuestion(question).then((newQuestion) =>
      dispatch(addQuestion(newQuestion))
    );
  };
}

export function handleAnswerQuestion(questionId, option, loggedUser) {
  return (dispatch) => {
    dispatch(answerQuestion(questionId, option, loggedUser));

    return _saveQuestionAnswer({
      authedUser: loggedUser,
      qid: questionId,
      answer: option,
    }).catch((e) => {
      console.warn("Error in handleAnswerQuestion: ", e);
      dispatch(removeAnswer(questionId, option, loggedUser));
      alert("There was an error answering the question. Please try again.");
    });
  };
}
