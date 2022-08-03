import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Login from "./Login";
import UserList from "./UserList";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import Nav from "./Nav";
import { Routes, Route, Switch } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import ErrorPage from "./ErrorPage";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <div className="container">
        <LoadingBar />
        <Nav />
        {props.notLogged === true ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/questions/:question_id" element={<Question />} />
            <Route path="/add" element={<NewQuestion />} />
            <Route path="/leaderboard" element={<UserList />} />
            <Route exact element={<ErrorPage />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ loggedUser }) => ({
  notLogged: loggedUser === null,
});

export default connect(mapStateToProps)(App);
