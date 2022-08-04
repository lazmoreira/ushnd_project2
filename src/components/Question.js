import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";
import withRouter from "../helpers/helper";
import ErrorPage from "./ErrorPage";

const Question = (props) => {
  console.log("PROPS", props);
  if (props.notExists) {
    return <ErrorPage />;
  }

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
    <div className="column col-6 col-mx-auto">
      <h5
        className="column col-12 text-primary"
        style={{ textAlign: "center" }}
      >{`Author: ${author.name}`}</h5>
      <div className="column col-6 col-mx-auto">
        <img
          src={author.avatarURL}
          alt={`Avatar of ${author.name}`}
          className="column col-8 p-centered"
        />
      </div>
      <h3
        className="column col-12 text-primary"
        style={{ textAlign: "center" }}
      >
        Would You Rather
      </h3>
      <div className="columns">
        <div className="column">
          <button
            className={
              answered === true && user.answers[question.id] === "optionOne"
                ? "btn btn-lg btn-block btn-primary"
                : "btn btn-lg btn-block"
            }
            id="optionOne"
            onClick={handleOptionSelected}
          >
            {question.optionOne.text}
          </button>
          {answered === true && user.answers[question.id] === "optionOne" ? (
            <div className="text-primary">Your vote</div>
          ) : null}
          {answered === true ? (
            <div className="text-primary">
              {`${votesOpt1} votes - ${percentOpt1}%`}
            </div>
          ) : null}
        </div>
        <div className="divider-vert" data-content="OR"></div>
        <div className="column">
          <button
            className={
              answered === true && user.answers[question.id] === "optionTwo"
                ? "btn btn-lg btn-block btn-primary"
                : "btn btn-lg btn-block"
            }
            id="optionTwo"
            onClick={handleOptionSelected}
          >
            {question.optionTwo.text}
          </button>
          {answered === true && user.answers[question.id] === "optionTwo" ? (
            <div className="text-primary">Your vote</div>
          ) : null}
          {answered === true ? (
            <p className="text-primary">
              {`${votesOpt2} votes - ${percentOpt2}%`}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ loggedUser, questions, users }, props) => {
  const { question_id } = props.router.params;
  const question = questions[question_id];

  if (!question) {
    return {
      notExists: true,
    };
  }

  const author = users[question.author];
  const user = users[loggedUser];

  return {
    user,
    author,
    question,
    notExists: false,
  };
};

export default withRouter(connect(mapStateToProps)(Question));
