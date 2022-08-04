import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setLoggedUser } from "../actions/loggedUser";
import { useLocation } from "react-router-dom";

const Login = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const handleChange = (e) => {
    const userId = e.target.value;

    setUserId(userId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.dispatch(setLoggedUser(userId));

    navigate(location.pathname, { replace: true });
  };

  return (
    <div className="column col-3 col-mx-auto">
      <h3 className="text-primary" style={{ textAlign: "center" }}>
        Choose a user to login
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="column col-6 col-mx-auto">
          <select
            name="users"
            onChange={handleChange}
            className="form-select select-lg form-input"
            data-testid="user"
          >
            <option value=""></option>
            {props.users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button
            className="btn btn-primary btn-lg form-input column col-4 col-mx-auto mt-2"
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
