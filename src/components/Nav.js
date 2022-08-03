import { Link } from "react-router-dom";
import LoggedUser from "./LoggedUser";

const Nav = () => {
  return (
    <header className="navbar">
      <section className="navbar-section">
        <Link to="/" className="navbar-brand mr-2">
          Home
        </Link>
        <Link to="/add" className="navbar-brand mr-2">
          Add Question
        </Link>
        <Link to="/leaderboard" className="navbar-brand mr-2">
          Leaderboard
        </Link>
      </section>
      <section className="navbar-section">
        <LoggedUser />
      </section>
    </header>
  );
};

export default Nav;
