import { getByText, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appstore from "../utils/appStore";

it("should render menu items in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const element1 = screen.getByText("Home");
  expect(element1).toBeInTheDocument();
});
