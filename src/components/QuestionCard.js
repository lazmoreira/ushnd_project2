import { connect } from "react-redux";
import { Link } from "react-router-dom";

const QuestionCard = (props) => {
  const { question, author } = props;

  return (
    <div className="column col-3 mt-2">
      <Link to={`/questions/${question.id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-subtitle text-gray">{`Author: ${author}`}</div>
            <div className="card-title h3">Would You Rather</div>
          </div>
          <div className="card-body">
            <div className="text-primary">{question.optionOne.text}</div>
            <div class="divider text-center" data-content="OR"></div>
            <div className="text-primary">{question.optionTwo.text}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ loggedUser, questions, users }, { questionId }) => {
  const question = questions[questionId];
  const author = users[question.author].name;

  return {
    loggedUser,
    author,
    question,
  };
};

export default connect(mapStateToProps)(QuestionCard);
