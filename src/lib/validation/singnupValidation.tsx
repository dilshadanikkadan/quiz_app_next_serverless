import * as Yup from "yup";
export const signupValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(20, "Must be 20 characters or less")
    .required("username can not be empty"),
  email: Yup.string().email("Invalid email address").required("email can not be empty"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("password can not be empty"),
});

export const signUpInitialValues = {
  username: "",
  email: "",
  password: "",
};

export const loginValidationSchema = Yup.object({
 
  email: Yup.string().email("Invalid email address").required("email can not be empty"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("password can not be empty"),
});

export const loginInitialValues = {
  email: "",
  password: "",
};
