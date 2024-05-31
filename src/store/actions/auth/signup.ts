import { SignupFormData } from "@/types/entities";
import { postRequest } from "@/utils/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const signupAction = createAsyncThunk(
  "user/signup",
  async (payload: SignupFormData) => {
    try {
      const res = await postRequest("/user/signup", payload);
      if (res?.status == 200) {
        console.log("yes its ok ");

        return res.data.payload;
      }
    } catch (error) {
      const e: any = error as AxiosError;
      throw new Error(
        e.response?.data.error || e.response?.data.message || e.message
      );
    }
  }
);
