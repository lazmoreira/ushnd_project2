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
    <div>
      <h3>Create a new question</h3>
      <h1>Would You Rather</h1>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          placeholder={"Type the first option"}
          value={optionOne}
          className="option-input"
          maxLength={120}
          id="optionOne"
          onChange={handleChange}
        />
        <label htmlFor="optionOne">First option</label>
        <input
          type={"text"}
          placeholder={"Type the second option"}
          value={optionTwo}
          className="option-input"
          maxLength={120}
          id="optionTwo"
          onChange={handleChange}
        />
        <label htmlFor="optionTwo">Second option</label>
        <button
          className="btn"
          type="submit"
          disabled={optionOne === "" || optionTwo === ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ loggedUser }) => ({
  loggedUser,
});

export default connect(mapStateToProps)(NewQuestion);
