import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Login from "./Login";
import UserList from "./UserList";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import Nav from "./Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import ErrorPage from "./ErrorPage";
import React from "react";

function App(props) {
  useEffect(() => {
    console.log("BEFORE USEEFFECT", props.loggedUser);
    props.dispatch(handleInitialData(props.loggedUser));
  }, []);

  return (
    <Fragment>
      <div className="container">
        <LoadingBar />
        <Nav />
        <div className="columns">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              exact
              element={
                props.notLogged ? <Navigate to="/login" /> : <Dashboard />
              }
            />
            <Route
              path="/questions/:question_id"
              element={
                props.notLogged ? <Navigate to="/login" /> : <Question />
              }
            />
            <Route
              path="/add"
              element={
                props.notLogged ? <Navigate to="/login" /> : <NewQuestion />
              }
            />
            <Route
              path="/leaderboard"
              element={
                props.notLogged ? <Navigate to="/login" /> : <UserList />
              }
            />
            <Route
              path="/notfound"
              exact
              element={
                props.notLogged ? <Navigate to="/login" /> : <ErrorPage />
              }
            />
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
