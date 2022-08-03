import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../actions/loggedUser";

const LoggedUser = (props) => {
  const navigate = useNavigate();

  const { loggedUser } = props;

  const handleClick = (e) => {
    e.preventDefault();

    props.dispatch(logoutUser());

    navigate("/");
  };

  return (
    <div>
      <div>{`Logged as: ${loggedUser}`}</div>
      <span className="logout-btn" onClick={handleClick}>
        Logout
      </span>
    </div>
  );
};

const mapStateToProps = ({ loggedUser }) => ({
  loggedUser,
});

export default connect(mapStateToProps)(LoggedUser);
