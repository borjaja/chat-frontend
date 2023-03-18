import { render, screen } from "@testing-library/react";
import SignIn from "./SignIn";

test("renders learn react link", () => {
  render(<SignIn />);
  const linkElement = screen.getByText(/Sign in/i);
  expect(linkElement).toBeInTheDocument();
});
