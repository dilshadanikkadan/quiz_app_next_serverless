"use client";
import { Provider } from "react-redux";
import { store } from "./persist";

export default function ReduxProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
