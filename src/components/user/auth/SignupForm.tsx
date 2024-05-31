"use client";
import {
  signUpInitialValues,
  signupValidationSchema,
} from "@/lib/validation/singnupValidation";
import { TypeDispatch } from "@/store";
import { signupAction } from "@/store/actions/auth/signup";
import { loginSuccess, selectLoading } from "@/store/slices/user";
import { SignupFormData } from "@/types/entities";
import { useMutation } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik, replace } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SignupForm = () => {
  const router = useRouter();
  const loading = useSelector(selectLoading);
  const dispatch: TypeDispatch = useDispatch();
  const handleSignup = async (values: SignupFormData) => {
    const response = await dispatch(signupAction(values)).unwrap();
    console.log("response", response);
    dispatch(loginSuccess(response));
    router.replace("/");
  };
  return (
    <>
      <div className="flex w-full ">
        <Formik
          initialValues={signUpInitialValues}
          validationSchema={signupValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSignup(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="flex justify-center   flex-col">
                <Field
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="input input-bordered w-full max-w-sm border border-[#FDB101]"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500"
                />
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
                  href="/login"
                  className="underline text-yellow mt-4 text-sm"
                >
                  Already have an account ?
                </Link>
                <button
                  type="submit"
                  className=" py-3 mt-4 w-[80%] m-auto text-white bg-[#FDB101] rounded-3xl   "
                >
                  {isSubmitting || loading ? "Signing up..." : "Sign up"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignupForm;
