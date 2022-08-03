import { render } from "@testing-library/react";
import NewQuestion from "../components/NewQuestion";
import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";
import ErrorPage from "../components/ErrorPage";

const store = createStore(reducer, middleware);

describe("NewQuestion", () => {
  it("will match snapshot", () => {
    const comp = render(
      <Provider store={store}>
        <NewQuestion />
      </Provider>
    );
    expect(comp).toMatchSnapshot();
  });
});
