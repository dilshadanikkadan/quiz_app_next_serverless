import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user";
import { quizReducer } from "./slices/quiz";

export const store = configureStore({
  reducer: {
    user: userReducer,
    quiz:quizReducer
  },
});

export type TypeDispatch = typeof store.dispatch;
export type TypeState = ReturnType<typeof store.getState>;
