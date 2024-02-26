import { configureStore } from "@reduxjs/toolkit";
import bookReducer, { fetchBooks } from "../reducers/bookSlice";
import authReducer from "../reducers/authSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    auth: authReducer,
  },
});

store.dispatch(fetchBooks());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
