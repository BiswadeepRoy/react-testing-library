import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header props render tests for title", () => {
  it("Should render the title passed in the props", () => {
    render(<Header title={"My title"} />);
    const headerElement = screen.getByText(/my title/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("Should render the title passed in the props", () => {
    render(<Header title={"My title"} />);
    const headerElement = screen.getByRole("heading", { name: "My title" });
    expect(headerElement).toBeInTheDocument();
  });
});
