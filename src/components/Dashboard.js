import { connect } from "react-redux";
import { useState } from "react";
import QuestionCard from "./QuestionCard";

const Dashboard = (props) => {
  const [showUnanswered, setShowUnanswered] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();

    e.target.id === "unanswered-btn"
      ? setShowUnanswered(true)
      : setShowUnanswered(false);

    if (showUnanswered === true) {
      //change button class
    }
  };

  return (
    <div>
      <div id="unanswered-btn" className="question-tab" onClick={handleClick}>
        Unanswered
      </div>
      <div
        id="answered-btn"
        className="question-tab-disabled"
        onClick={handleClick}
      >
        Answered
      </div>
      <ul>
        {Object.values(props.questions)
          .filter((question) =>
            showUnanswered === true
              ? question.optionOne.votes.includes(props.loggedUser) === false &&
                question.optionTwo.votes.includes(props.loggedUser) === false
              : question.optionOne.votes.includes(props.loggedUser) === true ||
                question.optionTwo.votes.includes(props.loggedUser) === true
          )
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((question) => (
            <li key={question.id}>
              <QuestionCard questionId={question.id} />
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ questions, loggedUser }) => ({
  loggedUser,
  questions,
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - [a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);
