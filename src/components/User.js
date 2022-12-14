import { connect } from "react-redux";

const User = (props) => {
  const { user, loggedUser } = props;

  return (
    <div className="tile bg-secondary mt-2 p-2">
      <div className="tile-icon">
        <div className="example-tile-icon">
          <img
            src={user.avatarURL}
            alt={`Avatar of ${user.name}`}
            className="avatar"
          />
        </div>
      </div>
      <div className="tile-content">
        <p className="tile-title text-bold">{user.name}</p>
      </div>
      <div className="tile-action">
        <span className="chip bg-primary">{`${user.questions.length} Questions`}</span>
        <span className="chip bg-primary">{`${
          Object.keys(user.answers).length
        } Answers`}</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, loggedUser }, { id }) => ({
  user: users[id],
  loggedUser,
});

export default connect(mapStateToProps)(User);
