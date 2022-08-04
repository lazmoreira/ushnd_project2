import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../actions/loggedUser";

const LoggedUser = (props) => {
  const navigate = useNavigate();

  const { loggedUser } = props;

  const handleClick = (e) => {
    e.preventDefault();

    props.dispatch(logoutUser());
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      {loggedUser !== null ? (
        <div>
          <span className="text-primary mr-2">{loggedUser}</span>
          <button className="btn btn-sm btn-primary" onClick={handleClick}>
            Logout
          </button>
        </div>
      ) : (
        <Link to="/">Login</Link>
      )}
    </div>
  );
};

const mapStateToProps = ({ loggedUser }) => ({
  loggedUser,
});

export default connect(mapStateToProps)(LoggedUser);
