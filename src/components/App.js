import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import "../App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import LoggedUser from "./LoggedUser";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div className="App">
      {props.notLogged === true ? (
        <h3>
          <Login />
        </h3>
      ) : (
        <LoggedUser />
      )}
    </div>
  );
}

const mapStateToProps = ({ loggedUser }) => ({
  notLogged: loggedUser === null,
});

export default connect(mapStateToProps)(App);
