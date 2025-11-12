import { createSlice } from '@reduxjs/toolkit';
import { BookList } from '../data/booksData';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    list: BookList,
  },
  reducers: {
    addBook: (state, action) => {
      // Add new book to the beginning of the list
      state.list.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;