import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setLoggedUser } from "../actions/loggedUser";

const Login = (props) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const handleChange = (e) => {
    const userId = e.target.value;

    setUserId(userId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.dispatch(setLoggedUser(userId));

    navigate("/");
  };

  return (
    <div>
      <h3>Choose a user to login</h3>
      <form onSubmit={handleSubmit}>
        <select name="users" onChange={handleChange}>
          <option value=""></option>
          {props.users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button className="btn" type="submit" disabled={userId === ""}>
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users),
});

export default connect(mapStateToProps)(Login);
