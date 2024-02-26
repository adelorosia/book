import {
  EntityState,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IUser, TUser } from "../../interface";
import { loginUser, registerUser, verifyToken } from "../services";
import { RootState } from "../store";

interface IAuthState {
  isLoginFormOpen: boolean;
  token: string;
}

const authAdapter = createEntityAdapter({
  selectId: (user: IUser) => user._id,
});

export const registerApiUser = createAsyncThunk(
  "/auth/registerApiUser",
  async (initialUser: TUser) => {
    try {
      const response = await registerUser(initialUser);
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

export const loginApiUser = createAsyncThunk(
  "/auth/loginApiUser",
  async (initialUser: TUser) => {
    try {
      const response = await loginUser(initialUser);
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

export const verifyApiAccount = createAsyncThunk(
  "/auth/verifyApiAccount",
  async (token: string) => {
    try {
      const response = await verifyToken(token);
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

const initialState: IAuthState & EntityState<IUser, string> =
  authAdapter.getInitialState({
    isLoginFormOpen: true,
    token: "",
  });

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoginFormOpen: (state, action) => {
      state.isLoginFormOpen = action.payload;
    },
    setVerifyAccountToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerApiUser.fulfilled, authAdapter.addOne)
      .addCase(verifyApiAccount.fulfilled, authAdapter.setAll)
      .addCase(loginApiUser.fulfilled, authAdapter.addOne);
  },
});

export const { selectAll: verifyEmail } = authAdapter.getSelectors(
  (state: RootState) => state.auth
);

export const { setIsLoginFormOpen, setVerifyAccountToken } = authSlice.actions;
export default authSlice.reducer;
