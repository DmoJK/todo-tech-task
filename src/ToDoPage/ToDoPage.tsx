import { FC, useState } from "react"
import cls from "./ToDoPage.module.scss"
import { TodoList } from "./TodoList/TodoList"
import { AddTodo } from "./AddTodo/AddTodo"
import { Filters, ITodo } from "../models/ITodo"

export const ToDoPage: FC = () => {
  const [todoFilter, setTodoFilter] = useState<string>("")
  const [todos, setTodos] = useState<Array<ITodo>>([])

  const handleTodoSet = (todo: ITodo) => {
    setTodos((prev) => [...prev, todo])
  }

  const handleTodoChange = (id: string, isDone: boolean) => {
    let changedTodos = todos?.map((el) => {
      if (el.id === id) {
        return { ...el, isDone }
      }
      return el
    })
    setTodos(changedTodos)
  }

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.head}>Todos</h1>
      <div className={cls.main}>
        <TodoList
          todoFilter={todoFilter}
          todos={todos}
          todoChange={handleTodoChange}
        />

        <AddTodo setTodos={handleTodoSet} todoId={todos.length.toString()} />

        <div className={cls.filters}>
          <button
            onClick={() => setTodoFilter(Filters.all)}
            data-testid="filter-all"
          >
            All
          </button>
          <button
            onClick={() => setTodoFilter(Filters.active)}
            data-testid="filter-active"
          >
            Active
          </button>
          <button
            onClick={() => setTodoFilter(Filters.completed)}
            data-testid="filter-completed"
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  )
}
