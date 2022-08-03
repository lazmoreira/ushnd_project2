import { connect } from "react-redux";
import User from "./User";

const UserList = (props) => {
  console.log("PROPS", props);
  const { users } = props;

  return (
    <div className="columns">
      <div className="col-2 col-mx-auto">
        <h2 className="text-primary">Leaderboard</h2>
        {users.map((user) => (
          <User key={user.id} id={user.id} />
        ))}
      </div>
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
