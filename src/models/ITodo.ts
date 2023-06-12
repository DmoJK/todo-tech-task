export interface ITodo {
  isDone: boolean
  task: string
  id: string
}

export enum Filters {
  all = "ALL",
  active = "ACTIVE",
  completed = "COMPLETED",
}
