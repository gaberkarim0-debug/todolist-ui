import { ErrorMessage, Field, Form, Formik } from "formik";
import { registerSchema } from "./validation";
import Button from "../../../ui/Button";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useEffect } from "react";
import { globalStore } from "../../../Stores/Mainstore";
import { useNavigate } from "react-router";

export default function Register() {
  const { base_url, token } = useContext(globalStore);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);
  async function handleSubmit(values) {
    try {
      const res = await axios.post(
        `${base_url}/api/auth/local/register`,
        values,
      );
      if (res.data) {
        toast.success("User Create Succefully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      <Form className="lg:w-200 w-full mx-auto shadow flex flex-col items-center justify-center  gap-10 min-h-dvh">
        <h1 className="text-3xl tracking-wider cursor-default text-gray-400 hover:text-gray-600 duration-300  font-bold  uppercase">
          Welcome
        </h1>
        <div className="flex flex-col gap-5  w-1/2">
          <Field
            name="username"
            className="border-2 focus:border-gray-500 w-full outline-0 rounded-lg border-gray-300 px-4 py-2"
            placeholder="User name :"
          />
          <ErrorMessage
            name="username"
            component={"p"}
            className="text-red-500  font-bold text-[16px]"
          />
          <Field
            name="email"
            className="border-2 w-full focus:border-gray-500 outline-0 rounded-lg border-gray-300 px-4 py-2"
            placeholder="Email :"
          />
          <ErrorMessage
            name="email"
            component={"p"}
            className="text-red-500  font-bold text-[16px]"
          />
          <Field
            type="password"
            name="password"
            className="border-2 w-full focus:border-gray-500 outline-0 rounded-lg border-gray-300 px-4 py-2"
            placeholder="Password :"
          />
          <ErrorMessage
            name="password"
            component={"p"}
            className="text-red-500 font-bold text-[16px]"
          />
        </div>
        <Button>Register</Button>
      </Form>
    </Formik>
  );
}
