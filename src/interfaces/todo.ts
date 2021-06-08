export enum TodoStatus {
  NEW,
  DONE,
  ARCHIVED,
}

export interface ITodo {
  id: number;
  content: string;
  status: TodoStatus;
}
