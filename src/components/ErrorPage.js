import { connect } from "react-redux";

const ErrorPage = (props) => {
  return (
    <div className="column col-6 col-mx-auto">
      <h1 className="text-primary" style={{ textAlign: "center" }}>
        Error, page not found.
      </h1>
    </div>
  );
};

const mapStateToProps = ({ loggedUser, questions, users }) => {
  return {
    loggedUser,
    questions,
    users,
  };
};

export default connect(mapStateToProps)(ErrorPage);
