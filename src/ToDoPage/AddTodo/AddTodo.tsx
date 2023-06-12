import { ITodo } from "models/ITodo"
import cls from "./AddTodo.module.scss"
import { useState } from "react"

interface AddTodoProps {
  setTodos: (todo: ITodo) => void
  todoId: string
}

export const AddTodo = ({ setTodos, todoId }: AddTodoProps) => {
  const [text, setText] = useState<string>("")
  const [validate, setValidate] = useState<boolean>(false)

  const handleAdd = (e: React.MouseEvent<HTMLElement>) => {
    if (text !== "") {
      setTodos({ task: text, isDone: false, id: todoId })
      setValidate(false)
    } else {
      setValidate(true)
    }
  }

  return (
    <div>
      <div className={cls.interact}>
        <input
          className={cls.task_input}
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          data-testid="input-todo"
        />
        <button
          className={cls.add_btn}
          onClick={handleAdd}
          data-testid="add-todo"
        >
          Add
        </button>
      </div>
      {validate && (
        <div className={cls.error_validate} data-testid="error-validate">
          This field is required
        </div>
      )}
    </div>
  )
}
