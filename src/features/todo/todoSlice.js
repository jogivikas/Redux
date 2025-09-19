// features/todo/todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abx", task: "demo", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload.task,
        isDone: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    markAsDone: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.isDone = true;
      }
    },
  },
});

// named exports for actions
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

// default export reducer for easier import in store
export default todoSlice.reducer;
