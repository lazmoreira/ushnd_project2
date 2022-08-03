import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../api/_DATA";

describe("_getQuestions", () => {
  it("will check if the questions are being returned correctly", async () => {
    const result = await _getQuestions();

    expect(Object.keys(result).length).toBeGreaterThan(0);
  });
});

describe("_getUsers", () => {
  it("will check if the users are being returned correctly", async () => {
    const result = await _getUsers();

    expect(Object.keys(result).length).toBeGreaterThan(0);
  });
});

describe("_saveQuestion", () => {
  it("will check if the questions are being returned correctly", async () => {
    const question = {
      optionOneText: "Option 1",
      optionTwoText: "Option 2",
      author: "mtsamis",
    };

    const result = await _saveQuestion(question);

    expect(result.optionOne.text).toEqual("Option 1");
    expect(result.optionTwo.text).toEqual("Option 2");
    expect(result.author).toEqual("mtsamis");
  });

  it("will check if an error is returned", async () => {
    const question = {
      optionOneText: "Option 1",
      optionTwoText: "Option 2",
    };

    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will check if the answers are saved correctly", async () => {
    const data = {
      authedUser: "tylermcginnis",
      qid: "xj352vofupe1dqz9emx13r",
      answer: "optionOne",
    };

    const result = await _saveQuestionAnswer(data);

    expect(result).toEqual(true);
  });

  it("will check if an error is returned", async () => {
    const data = {
      authedUser: "Option 1",
      qid: "xj352vofupe1dqz9emx13r",
    };

    await expect(_saveQuestionAnswer(data)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
