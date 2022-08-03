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
      {loggedUser !== null ? (
        <div>
          <div className="text-primary">{loggedUser}</div>
          <button className="btn" onClick={handleClick}>
            Logout
          </button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ loggedUser }) => ({
  loggedUser,
});

export default connect(mapStateToProps)(LoggedUser);
