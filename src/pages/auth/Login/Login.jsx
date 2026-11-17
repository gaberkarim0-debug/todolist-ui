import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../../../ui/Button";
import { loginSchema } from "./validation";
import axios from "axios";
import { useContext, useEffect } from "react";
import { globalStore } from "../../../Stores/Mainstore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function Login() {
  const { base_url, setToken, token, setUserData } = useContext(globalStore);
  // navigate
  const navigate = useNavigate();
  // use Effect
  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    }
  }, [token]);
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post(`${base_url}/api/auth/local`, values);
      if (res.data) {
        localStorage.setItem("token", res.data.jwt);
        setToken(res.data.jwt);
        setUserData(res.data.user);
        localStorage.setItem("userData", JSON.stringify(res.data.user));
        toast.success("You have successfully signed in!", {
          duration: 3000,
        });
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      }
    } catch (error) {
      toast.error(error.message, {
        duration: 5000,
      });
    }
  };
  return (
    <Formik
      initialValues={{
        identifier: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form className="w-lg-200  mx-auto shadow flex flex-col items-center justify-center  gap-10 min-h-dvh">
        <h1 className="md:text-3xl text-xl tracking-wider cursor-default text-gray-400 hover:text-gray-600 duration-300  font-bold  uppercase">
          Welcome
        </h1>
        <div className="flex flex-col gap-0 lg:gap-5 w-full lg:w-1/2">
          <Field
            name="identifier"
            className="border-2 w-full focus:border-gray-500 outline-0 rounded-lg border-gray-300 px-4 py-2"
            placeholder="User name :"
          />
          <ErrorMessage
            name="identifier"
            component={"p"}
            className="text-red-500 font-bold text-[16px]"
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
        <Button>Login</Button>
      </Form>
    </Formik>
  );
}
