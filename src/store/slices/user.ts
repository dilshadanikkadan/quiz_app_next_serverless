import { createSlice } from "@reduxjs/toolkit";
import { signupAction } from "../actions/auth/signup";
import { getCurrentuser } from "@/services/api/quizApi";

const INITIAL_STATE = {
  isAuthenticated: false,
  loading: false,
  data: null,
  error: null,
  isAdmin: false,
};

export interface UserState {
  isAuthenticated: boolean;
  loading: boolean;
  data: any;
  error: any | null;
  isAdmin: boolean;
}

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    loginSuccess: (state: UserState, action) => {
      console.log("user", action.payload);
      action.payload.isAdmin ? (state.isAdmin = true) : "";
      state.data = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state: UserState, ) => {
      state.data = null;
      state.isAuthenticated = false;
      state.isAdmin= false
    },
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupAction.pending, (state: UserState) => {
        state.loading = true;
      })
      .addCase(signupAction.fulfilled, (state: UserState, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        action.payload.isAdmin ? (state.isAdmin = true) : "";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(signupAction.rejected, (state: UserState, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = null;
      });
  },
});

export const selectLoading = (state: any) => state.user?.loading;
export const setAuth = (state: any) => state.user?.isAuthenticated;
export const currentUser = (state: any) => state.user;
export const { loginSuccess ,logoutUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
