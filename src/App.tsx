import { FC } from "react"
import "./App.scss"
import { ToDoPage } from "./ToDoPage/ToDoPage"

export const App: FC = () => {
  return <div className="app">
    <ToDoPage />
  </div>
}
