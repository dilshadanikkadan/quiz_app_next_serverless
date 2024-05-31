import { createSlice } from "@reduxjs/toolkit";
import { signupAction } from "../actions/auth/signup";

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null,
};

export interface QuizState {
  loading: boolean;
  data: any;
  error: any | null;
}

const quizSlice = createSlice({
  name: "quiz",
  initialState: INITIAL_STATE,
  reducers: {
    quizCreated: (state: QuizState, action) => {
      console.log("user", action.payload);

      state.data = action.payload;
    },
  },
 
});

export const selectLoading = (state: any) => state.user?.loading;
export const { quizCreated } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
