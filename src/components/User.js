import { connect } from "react-redux";

const User = (props) => {
  const { user, loggedUser } = props;

  return (
    <div
      className={
        loggedUser === user.id ? "logged-user-leaderboard" : "user-leaderboard"
      }
    >
      <img
        src={user.avatarURL}
        alt={`Avatar of ${user.name}`}
        className="avatar"
      />
      <h2>{user.name}</h2>
      <span className="question-counter">{`${user.questions.length} Questions`}</span>
      <span className="question-counter">{`${
        Object.keys(user.answers).length
      } Answers`}</span>
    </div>
  );
};

const mapStateToProps = ({ users, loggedUser }, { id }) => ({
  user: users[id],
  loggedUser,
});

export default connect(mapStateToProps)(User);
