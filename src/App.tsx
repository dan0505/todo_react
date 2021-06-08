import { useState } from "react";
import AddTodo from "./components/AddTodo";
import { ITodo, TodoStatus } from "./interfaces/todo";
import Todos from "./components/Todos";

const defaultTodos: ITodo[] = [
  { id: 1, content: "buy some milk", status: TodoStatus.NEW },
  { id: 2, content: "play mario kart", status: TodoStatus.NEW },
];

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>(defaultTodos);

  const deleteTodo = (id: number) => {
    console.log('id to remove', id);
    const tmp = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(tmp);
  };

  const addTodo = (todo: Partial<ITodo>) => {
    todo.id = Math.random();
    let tmp = [...todos, todo];
      setTodos(tmp as ITodo[]);
  };
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}
