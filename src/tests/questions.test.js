import { render, screen } from "@testing-library/react";
import NewQuestion from "../components/NewQuestion";
import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import reducer from "../reducers";
import middleware from "../middleware";

const store = createStore(reducer, middleware);

describe("NewQuestion", () => {
  it("will match snapshot", () => {
    const { component } = render(
      <MemoryRouter>
        <Provider store={store}>
          <NewQuestion />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });

  it("will verify if the fields are on the screen", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewQuestion />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("optionOne")).toBeInTheDocument();
    expect(screen.getByTestId("optionTwo")).toBeInTheDocument();
  });
});
