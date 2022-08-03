import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";
import withRouter from "../helpers/helper";

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
    <div className="container">
      <div className="columns">
        <div className="p-centered">
          <div>
            <h5>Author: {author.name}</h5>
            <img
              src={author.avatarURL}
              alt={`Avatar of ${author.name}`}
              className="p-centered"
            />
            <h3>Would You Rather</h3>
          </div>
          <div class="columns">
            <div class="column">
              <button
                className={
                  answered === true && user.answers[question.id] === "optionOne"
                    ? "btn btn-lg btn-primary"
                    : "btn btn-lg"
                }
                id="optionOne"
                onClick={handleOptionSelected}
              >
                {question.optionOne.text}
              </button>
              {answered === true &&
              user.answers[question.id] === "optionOne" ? (
                <div className="text-primary">Your vote</div>
              ) : null}
              {answered === true ? (
                <div className="text-primary">
                  {`${votesOpt1} votes - ${percentOpt1}%`}
                </div>
              ) : null}
            </div>
            <div class="divider-vert" data-content="OR"></div>
            <div class="column">
              <button
                className={
                  answered === true && user.answers[question.id] === "optionTwo"
                    ? "btn btn-lg btn-primary"
                    : "btn btn-lg"
                }
                id="optionTwo"
                onClick={handleOptionSelected}
              >
                {question.optionTwo.text}
              </button>
              {answered === true &&
              user.answers[question.id] === "optionTwo" ? (
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
      </div>
    </div>
  );
};

const mapStateToProps = ({ loggedUser, questions, users }, props) => {
  console.log("PROPS", props);
  const { question_id } = props.router.params;
  const question = questions[question_id];
  const author = users[question.author];
  const user = users[loggedUser];

  return {
    user,
    author,
    question,
  };
};

export default withRouter(connect(mapStateToProps)(Question));
