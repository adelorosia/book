import {
  EntityState,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IBook } from "../../interface";
import { getBooks } from "../services";
import { RootState } from "../store";

interface IBookState {
  error: string;
  status: "idle" | "loading" | "success" | "failed";
  bookId: string;
}

const bookAdapter = createEntityAdapter({
  selectId: (book: IBook) => book._id,
});

export const fetchBooks = createAsyncThunk("/books/fetchBooks", async () => {
  try {
    const response = await getBooks();
    return response.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
});

const initialState: IBookState & EntityState<IBook, string> =
  bookAdapter.getInitialState({
    error: "",
    status: "idle",
    bookId: "",
  });

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBookId: (state, action) => {
      state.bookId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "success";
        bookAdapter.setAll(state, action.payload);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        (state.status = "failed"),
          (state.error = action.error.message || "An Error Accourred");
      });
  },
});

export const { selectAll: displayAllBooks, selectById: displayBookById } =
  bookAdapter.getSelectors((state: RootState) => state.books);

export const { setBookId } = bookSlice.actions;

export default bookSlice.reducer;
