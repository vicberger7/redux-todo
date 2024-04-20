import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentTodo: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
  },
});
export default todoSlice.reducer;
export const { addTodo, deleteTodo, setCurrentTodo } = todoSlice.actions;
