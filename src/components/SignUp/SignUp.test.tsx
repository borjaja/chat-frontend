import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUp from "./SignUp";
import * as fn from "../../services/auth/auth";

// Mock signUp
// jest.mock("../../services/auth/auth", () => ({
//   signUp: () => Promise.resolve({ response: "Error" }),
// }));

describe("SignUp Component", () => {
  it("Submitting with an empty username shows an error on the screen", async () => {
    render(<SignUp />);

    userEvent.click(screen.getByAltText("Write password"));
    userEvent.keyboard("pass");
    userEvent.click(screen.getByText("Sign up"));

    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("Submitting with an empty password shows an error on the screen", async () => {
    render(<SignUp />);

    userEvent.click(screen.getByAltText("Write username"));
    userEvent.keyboard("user");
    userEvent.click(screen.getByText("Sign up"));

    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("Submitting the form with the data of an already registered user shows an error on the screen", async () => {
    const spy = jest.spyOn(fn, "signUp").mockImplementation(() => Promise.resolve({ response: "Error" }));
    render(<SignUp />);

    userEvent.click(screen.getByAltText("Write username"));
    userEvent.keyboard("user");
    userEvent.click(screen.getByAltText("Write password"));
    userEvent.keyboard("pass");
    userEvent.click(screen.getByText("Sign up"));

    expect(await screen.findByText("Error")).toBeInTheDocument();
    spy.mockRestore();
  });
});
