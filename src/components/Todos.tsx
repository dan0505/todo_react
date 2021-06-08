import { ITodo } from "../interfaces/todo";

export default function Todos({
  todos,
  deleteTodo,
}: {
  todos: ITodo[];
  deleteTodo: (id: number) => void;
}) {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left</p>
  );
  return <div className="todos collection">{todoList}</div>;
}
