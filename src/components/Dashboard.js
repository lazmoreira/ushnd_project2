import { connect } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "./QuestionCard";

const Dashboard = (props) => {
  const [showUnanswered, setShowUnanswered] = useState(true);
  const refUnanswered = useRef();
  const refAnswered = useRef();

  useEffect(() => {
    setShowUnanswered(true);
  }, []);

  const handleClick = (e) => {
    setShowUnanswered(
      (current) => e.target.text === refUnanswered.current.text
    );

    console.log(showUnanswered);
  };

  return (
    <div className="container">
      <ul className="tab">
        <li className={showUnanswered ? "tab-item active" : "tab-item"}>
          <Link to="#" onClick={handleClick} ref={refUnanswered}>
            Unanswered
          </Link>
        </li>
        <li className={!showUnanswered ? "tab-item active" : "tab-item"}>
          <Link to="#" onClick={handleClick} ref={refAnswered}>
            Answered
          </Link>
        </li>
      </ul>
      <div className="columns">
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
            <QuestionCard questionId={question.id} key={question.id} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, loggedUser }) => ({
  loggedUser,
  questions,
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);
