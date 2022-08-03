import { connect } from "react-redux";
import User from "./User";

const UserList = (props) => {
  console.log("PROPS", props);
  const { users } = props;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <User key={user.id} id={user.id} />
        ))}
      </ul>
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
