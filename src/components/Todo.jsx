import { useSelector } from "react-redux";

export default function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.isDone ? "Done" : "Not Done"}
          </li>
        ))}
      </ul>
    </>
  );
}
