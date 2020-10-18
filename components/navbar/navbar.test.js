import { render, screen } from "@testing-library/react";
import Navbar from "./navbar";

describe("Navbar", () => {
  it("renders with proper text", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: "Home" }));
    expect(screen.getByRole("link", { name: /M Performance Models/i }));
    // Match any one of the '///' shown in the mobile menu icon
    expect(screen.getByRole("button", { name: /\//i }));
  });
});
