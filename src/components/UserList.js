import { connect } from "react-redux";
import User from "./User";

const UserList = (props) => {
  const { users } = props;

  return (
    <div className="col-3 col-mx-auto">
      <h2 className="text-primary" style={{ textAlign: "center" }}>
        Leaderboard
      </h2>
      {users.map((user) => (
        <User key={user.id} id={user.id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort((a, b) => {
    const scoreA = a.questions.length + Object.keys(a.answers).length;
    const scoreB = b.questions.length + Object.keys(b.answers).length;

    return scoreB - scoreA;
  }),
});

export default connect(mapStateToProps)(UserList);
