import React from "react"
import { Filters, ITodo } from "../../models/ITodo"
import { Todo } from "./Todo/Todo"

interface TodoListProps {
  todoChange: (id: string, isDone: boolean) => void
  todos: Array<ITodo>
  todoFilter: string
}

export const TodoList = ({ todos, todoFilter, todoChange }: TodoListProps) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    todoChange(target.id, target.checked)
  }

  return (
    <div>
      {todos.map((el) => {
        switch (todoFilter) {
          case Filters.all:
            return (
              <Todo
                handleChange={handleChange}
                id={el.id}
                isDone={el.isDone}
                task={el.task}
                key={el.id}
              />
            )

          case Filters.active:
            if (el.isDone === false)
              return (
                <Todo
                  handleChange={handleChange}
                  id={el.id}
                  isDone={el.isDone}
                  task={el.task}
                  key={el.id}
                />
              )
            break

          case Filters.completed:
            if (el.isDone === true)
              return (
                <Todo
                  handleChange={handleChange}
                  id={el.id}
                  isDone={el.isDone}
                  task={el.task}
                  key={el.id}
                />
              )
            break

          default:
            return (
              <Todo
                handleChange={handleChange}
                id={el.id}
                isDone={el.isDone}
                task={el.task}
                key={el.id}
              />
            )
        }
      })}
    </div>
  )
}
