import { Link } from "react-router-dom";
import LoggedUser from "./LoggedUser";
import { connect } from "react-redux";

const Nav = () => {
  return (
    <header className="navbar mt-2">
      <section className="navbar-section">
        <Link to="/" className="navbar-brand mr-2 btn btn-primary">
          Home
        </Link>
        <Link to="/add" className="navbar-brand mr-2 btn btn-primary">
          Add Question
        </Link>
        <Link to="/leaderboard" className="navbar-brand mr-2 btn btn-primary">
          Leaderboard
        </Link>
      </section>
      <section className="navbar-section">
        <LoggedUser />
      </section>
    </header>
  );
};

const mapStateToProps = ({ loggedUser }) => ({
  loggedUser,
});

export default connect(mapStateToProps)(Nav);
