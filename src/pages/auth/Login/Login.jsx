import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../../../ui/Button";
import { loginSchema } from "./validation";

export default function Login() {
  const handleSubmit = (values) => {
console.log(values)
  }
  return (
    <Formik initialValues={{
      username:"",
      password:"",
    }}
    onSubmit={handleSubmit}
    validationSchema={loginSchema}
    >
      
      <Form className="w-200 mx-auto shadow flex flex-col items-center justify-center  gap-10 min-h-dvh">
        <h1 className="text-3xl tracking-wider cursor-default text-gray-400 hover:text-gray-600 duration-300  font-bold  uppercase">
          Welcome <span>Kareem</span>
        </h1>
        <div className="flex flex-col gap-5  w-1/2">
          <Field
          name="username"
            className="border-2 w-full focus:border-gray-500 outline-0 rounded-lg border-gray-300 px-4 py-2"
            placeholder="User name :"
          />
          <ErrorMessage name="username" component={"p"} className="text-red-500 font-bold text-[16px]" />
          <Field
          type="password"
          name="password"
            className="border-2 w-full focus:border-gray-500 outline-0 rounded-lg border-gray-300 px-4 py-2"
            placeholder="Password :"
          />
          <ErrorMessage name="password" component={"p"} className="text-red-500 font-bold text-[16px]" />
        </div>
        <Button >Login</Button>
      </Form>
    </Formik>
  );
}
