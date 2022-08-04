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
    localStorage.setItem("loggedUser", userId);
    navigate("/", { replace: true });
  };

  return (
    <div className="col-4 col-mx-auto">
      <h3 className="col-6 col-mx-auto text-primary">Choose a user to login</h3>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <select
            name="users"
            onChange={handleChange}
            className="form-select select-lg form-input"
          >
            <option value=""></option>
            {props.users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button
            className="btn btn-primary btn-lg form-input"
            type="submit"
            disabled={userId === ""}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users),
});

export default connect(mapStateToProps)(Login);
