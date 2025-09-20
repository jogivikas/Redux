import { useSelector } from "react-redux";
import AddForm from "./AddForm";

export default function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  return (
    <>
      <AddForm />
      <h2>Todo List</h2>
      <h3>h1</h3>
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
