import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = { id: string; title: string; done: boolean };

const initialState: Todo[] = [
    { id: "1", title: "Заметка 1", done: false },
    { id: "2", title: "Заметка 2", done: false },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    deleteTodo(state, action: PayloadAction<string>) {
        const index = state.findIndex((t) => t.id === action.payload);
        if (index !== -1) state.splice(index, 1);
      },
    toggleTodo(state, action: PayloadAction<string>) {
        const todo = state.find((t) => t.id === action.payload);
        if (todo) todo.done = !todo.done;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;