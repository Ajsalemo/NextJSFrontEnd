import { render } from "@testing-library/react";
import Footer from "./footer";

describe("Footer", () => {
  it("renders with proper text", () => {
    const { container } = render(<Footer />);

    expect(container).toHaveTextContent("BMW ///M Performance Models");
  });
});
