import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTodoTask = (todos) => {
  todos.forEach((todo) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, {
      target: { value: todo },
    });
    fireEvent.click(buttonElement);
  });
};

describe("Todo component for integration of adding single todo and checking when added", () => {
  it("Should add a todo and render in the todo list component", () => {
    render(<MockTodo />);
    addTodoTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go grocery shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("Todo completed when added should not have strikethrough mark denoting completed", () => {
    render(<MockTodo />);
    addTodoTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go grocery shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});

describe("Todo component for integration of adding multiple todos and checking when added", () => {
  it("Should add multiple todo and render in the todo list component", () => {
    render(<MockTodo />);
    const todos = [
      "Plan a trip with friends",
      "Prepare for an interview",
      "Go grocery shopping",
    ];
    addTodoTask(todos);
    const divElements = screen.getAllByTestId("todo-item");
    divElements.forEach((divElement, index) => {
      expect(divElement).toHaveTextContent(todos[index]);
    });
  });
});

