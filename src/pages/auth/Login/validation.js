import * as yup from "yup";
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{7,}$/;
export const loginSchema = yup.object({
  identifier: yup.string().required().trim(),
  password: yup
    .string()
    .required()
    .trim()
    .matches(passwordRegex, "Password or User name is Wrong "),
});
