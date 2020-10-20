import { render, screen } from "@testing-library/react";
import Navbar from "./navbar";

describe("Navbar", () => {
  it("renders with proper text", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: "Home" }));
    expect(screen.getByRole("link", { name: /M Performance Models/i }));
  });
});
