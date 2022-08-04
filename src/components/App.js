import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Login from "./Login";
import UserList from "./UserList";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import ErrorPage from "./ErrorPage";
import React from "react";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData(props.loggedUser));
  });

  return (
    <Fragment>
      <div className="container">
        <LoadingBar />
        <Nav />
        <div className="columns">
          <Routes>
            <Route
              path="/"
              exact
              element={props.notLogged ? <Login /> : <Dashboard />}
            />
            <Route
              path="/questions/:question_id"
              element={props.notLogged ? <Login /> : <Question />}
            />
            <Route
              path="/add"
              element={props.notLogged ? <Login /> : <NewQuestion />}
            />
            <Route
              path="/leaderboard"
              element={props.notLogged ? <Login /> : <UserList />}
            />
            <Route path="/notfound" exact element={<ErrorPage />} />
            <Route path="*" exact element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ loggedUser }) => ({
  notLogged: loggedUser === null,
  loggedUser,
});

export default connect(mapStateToProps)(App);
