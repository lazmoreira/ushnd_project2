import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";
import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import mockReducer from "../helpers/mockReducer";
import middleware from "../middleware";

const store = createStore(mockReducer, middleware);

describe("Login", () => {
  it("will check if the field and button are present", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const userSelect = screen.getByTestId("user");
    const submit = screen.getByText("Login");

    expect(userSelect).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it("will create a new question", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const userSelect = screen.getByTestId("user");
    const submit = screen.getByText("Login");

    fireEvent.select(userSelect, "sarahedo");
    fireEvent.click(submit);

    expect(userSelect.textContent).toEqual("Sarah Edo");
  });
});
