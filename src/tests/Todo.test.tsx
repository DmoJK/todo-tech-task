import { fireEvent, render, screen } from "@testing-library/react"
import { ToDoPage } from "../ToDoPage/ToDoPage"

describe("TodoPage", () => {
  test("Todo", async () => {
    render(<ToDoPage />)

    const todoInput = screen.getByTestId("input-todo")
    const addTodoBtn = screen.getByTestId("add-todo")

    //Add todo
    expect(todoInput).toBeInTheDocument()
    expect(todoInput).toContainHTML("")
    expect(addTodoBtn).toBeInTheDocument()
    expect(screen.queryByTestId("todo")).toBeNull()

    fireEvent.click(addTodoBtn)
    expect(screen.getByTestId("error-validate")).toBeInTheDocument()

    fireEvent.input(todoInput, {
      target: { value: "go shopping" },
    })
    expect(todoInput).toContainHTML("go shopping")
    fireEvent.click(addTodoBtn)
    expect(screen.queryByTestId("error-validate")).toBeNull()
    fireEvent.input(todoInput, {
      target: { value: "" },
    })
    expect(todoInput).toContainHTML("")
    expect(screen.getByTestId("todo")).toBeInTheDocument()

    //Complete todo
    const checkbox = screen.getByTestId("checkbox")
    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    //Filter tasks
    const filterAll = screen.getByTestId("filter-all")
    const filterActive = screen.getByTestId("filter-active")
    const filterCompleted = screen.getByTestId("filter-completed")

    expect(filterAll).toBeInTheDocument()
    expect(filterActive).toBeInTheDocument()
    expect(filterCompleted).toBeInTheDocument()

    fireEvent.input(todoInput, {
      target: { value: "go hiking" },
    })
    fireEvent.click(addTodoBtn)

    expect(await screen.findAllByTestId("todo")).toHaveLength(2)

    fireEvent.click(filterActive)
    expect(await screen.findAllByTestId("todo")).toHaveLength(1)

    fireEvent.click(filterCompleted)
    expect(await screen.findAllByTestId("todo")).toHaveLength(1)

    fireEvent.click(filterAll)
    expect(await screen.findAllByTestId("todo")).toHaveLength(2)
  })
})
