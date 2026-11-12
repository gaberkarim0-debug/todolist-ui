import * as yup from "yup";
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{7,}$/;
export const registerSchema = yup.object({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required")
    .trim(),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .trim(),

  password: yup
    .string()
    .matches(
      passwordRegex,
      "Password must contain at least 1 uppercase letter, 1 number, 1 special character, and be at least 7 characters long",
    )
    .required("Password is required")
    .trim(),
});
