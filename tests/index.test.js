import { getByText, render } from "@testing-library/react";
import Index from "../pages/index";

describe("App", () => {
  it("renders without crashing", () => {
    render(<Index />);
    // Create runnable tests
    // expect(
    //   getByText('M Performance Models')
    // ).toBeInTheDocument();
  });
});
