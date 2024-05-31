"use client";

import {
  loginInitialValues,
  loginValidationSchema,
  signUpInitialValues,
  signupValidationSchema,
} from "@/lib/validation/singnupValidation";
import { userLogin } from "@/services/api/quizApi";
import { loginSuccess } from "@/store/slices/user";
import { useMutation } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const { mutate: loginMutate, isError } = useMutation({
    mutationFn: userLogin,

    onSuccess: (data) => {
      if (data?.errorMsg) {
        setError(data.errorMsg);
      }
      if (data?.success) {
        const isAdmin = data.payload?.userExist?.isAdmin;
        dispatch(loginSuccess(data.payload?.userExist));
        console.log("user is dilu", data.payload?.userExist.isAdmin);

        if (isAdmin) {
          console.log("you enterd admin route");

          router.replace("/admin/addquiz");
        } else {
          router.replace("/");
        }
      }
    },
  });

  return (
    <>
      <div className="flex w-full ">
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            loginMutate(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="flex justify-center   flex-col">
                {error && <p className="text-red-500">{error}</p>}
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered mt-7 w-full max-w-sm border border-[#FDB101]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full mt-7 max-w-sm border border-[#FDB101]"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
                <Link
                  href="/signup"
                  className="underline text-yellow mt-4 text-sm"
                >
                  Dont have an account ?
                </Link>
                <button
                  type="submit"
                  className=" py-3 mt-4 w-[80%] m-auto text-white bg-[#FDB101] rounded-3xl   "
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
