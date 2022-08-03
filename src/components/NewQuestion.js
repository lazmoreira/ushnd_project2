import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

const NewQuestion = (props) => {
  const navigate = useNavigate();
  const { loggedUser, dispatch } = props;
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleChange = (e) => {
    e.target.id === "optionOne"
      ? setOptionOne(e.target.value)
      : setOptionTwo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(optionOne, optionTwo, loggedUser));
    navigate("/");
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column col-6 col-mx-auto">
          <div className="text-primary">
            <h3>Create a new question</h3>
            <h1>Would You Rather</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="optionOne" className="form-label">
              First option
            </label>
            <input
              type={"text"}
              placeholder={"Type the first option"}
              value={optionOne}
              className="form-input input-lg"
              maxLength={120}
              id="optionOne"
              onChange={handleChange}
            />
            <label htmlFor="optionTwo" className="form-label">
              Second option
            </label>
            <input
              type={"text"}
              placeholder={"Type the second option"}
              value={optionTwo}
              className="form-input input-lg"
              maxLength={120}
              id="optionTwo"
              onChange={handleChange}
            />
            <button
              className="btn btn-primary btn-block mt-2"
              type="submit"
              disabled={optionOne === "" || optionTwo === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ loggedUser }) => ({
  loggedUser,
});

export default connect(mapStateToProps)(NewQuestion);
