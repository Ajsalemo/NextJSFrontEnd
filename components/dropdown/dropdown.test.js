import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "./dropdown";

describe("Dropdown", () => {
  it("renders the dropdown button", () => {
    render(<Dropdown />);

    screen.getByRole("button", { name: /Dropdown button/i });
  });

  it("should fire an event on click", (done) => {
    render(<Dropdown />);
    const handleClick = () => done();

    const button = screen.getByRole("button", { name: /Dropdown button/i });
    fireEvent.click(button, handleClick());
  });

  it("should fire an event on blur", (done) => {
    render(<Dropdown />);
    const handleBlur = () => done();

    const button = screen.getByRole("button", { name: /Dropdown button/i });
    fireEvent.blur(button, handleBlur());
  });
});
