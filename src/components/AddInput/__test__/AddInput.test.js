import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();

describe("AddInput field should correctly render and accept inputs", () => {
  it("Should render the add input form field", () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeVisible();
  });

  it("Should accept any valid string and render the string in input box", () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: "Go to Goa and have fun!" },
    });
    expect(inputElement.value).toBe("Go to Goa and have fun!");
  });

  it("Should clear the input once the add button is clicked", () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, {
      target: { value: "Go to Goa and have fun!" },
    });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
