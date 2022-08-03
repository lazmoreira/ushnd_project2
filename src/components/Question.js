import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";

const Question = (props) => {
  const { question, author, user, dispatch } = props;
  const answered = question.id in user.answers;
  const votesOpt1 = question.optionOne.votes.length;
  const votesOpt2 = question.optionTwo.votes.length;
  const totalVotes = votesOpt1 + votesOpt2;
  const percentOpt1 = (votesOpt1 / totalVotes) * 100;
  const percentOpt2 = (votesOpt2 / totalVotes) * 100;

  const handleOptionSelected = (e) => {
    e.preventDefault();

    if (!answered) {
      dispatch(handleAnswerQuestion(question.id, e.target.id, user.id));
    }
  };

  return (
    <div className="question">
      <img
        src={author.avatarURL}
        alt={`Avatar of ${author.name}`}
        className="avatar"
      />
      <div className="question-author">Author: {author.name}</div>
      {answered === true && user.answers[question.id] === "optionOne" ? (
        <span className="your-vote">You voted</span>
      ) : null}
      <div
        className="question-option"
        id="optionOne"
        onClick={handleOptionSelected}
      >
        {question.optionOne.text}
      </div>
      {answered === true ? (
        <span className="vote-counter">
          {`${votesOpt1} votes - ${percentOpt1}%`}
        </span>
      ) : null}
      <div className="center">or</div>
      {answered === true && user.answers[question.id] === "optionTwo" ? (
        <span className="your-vote">you voted</span>
      ) : null}
      <div
        className="question-option"
        id="optionTwo"
        onClick={handleOptionSelected}
      >
        {question.optionTwo.text}
      </div>
      {answered === true ? (
        <span className="vote-counter">
          {`${votesOpt2} votes - ${percentOpt2}%`}
        </span>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ loggedUser, questions, users }, { questionId }) => {
  const question = questions[questionId];
  const author = users[question.author];
  const user = users[loggedUser];

  return {
    user,
    author,
    question,
  };
};

export default connect(mapStateToProps)(Question);
