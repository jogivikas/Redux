// reducers/todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abx", task: "demo", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // simple reducer — caller must provide { task: "..." } as payload
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload.task,
        isDone: false,
      };
      state.todos.push(newTodo);
    },

    // delete by id: payload { id: "..." }
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    // mark as done by id: payload { id: "..." }
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

// default export reducer for store configuration
export default todoSlice.reducer;
