import cls from "./Todo.module.scss"

interface TodoProps {
  id: string
  task: string
  isDone: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Todo = ({ id, isDone, task, handleChange }: TodoProps) => {
  return (
    <div className={cls.todo} data-testid="todo">
      <input
        data-testid="checkbox"
        type="checkbox"
        className={cls.checkbox}
        checked={isDone}
        onChange={handleChange}
        id={id}
      />
      <label>{task}</label>
    </div>
  )
}
