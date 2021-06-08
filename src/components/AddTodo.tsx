import { ITodo } from "../interfaces/todo";
import { useState } from "react";

export default function AddTodo({
  addTodo,
}: {
  addTodo: (todo: Partial<ITodo>) => void;
}) {
  const [newTodo, setNewTodo] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ content: newTodo });
    setNewTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add new todo:</label>
        <input
          type="text"
          name="todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}
