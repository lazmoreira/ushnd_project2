import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const QuestionCard = (props) => {
  const navigate = useNavigate();
  const question = props.question;

  const handleClick = (e) => {
    e.preventDefault();

    navigate(`/question/${question.id}`);
  };
  return (
    <div className="question-card" onClick={handleClick}>
      <div className="question-author">Author: {props.author}</div>
      <div className="question-card-option">{question.optionOne.text}</div>
      <div className="center">or</div>
      <div className="question-card-option">{question.optionTwo.text}</div>
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
