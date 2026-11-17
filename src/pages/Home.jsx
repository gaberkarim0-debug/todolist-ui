import { useContext, useEffect, useState } from "react";
import AddButton from "../ui/AddButton";
import DeleteButton from "../ui/DeleteButton";
import EditButton from "../ui/EditButton";
import { globalStore } from "../Stores/Mainstore";
import { useNavigate } from "react-router";
import axios from "axios";
import TodoSkeleton from "../ui/TodoSkeleton";
import Error from "../Errors/ErrorMessage";
import toast from "react-hot-toast";

const Home = () => {
  // vars
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState("");
  // store
  const { token, userData, base_url } = useContext(globalStore);
  // get todos
  const getTodos = async () => {
    try {
      const res = await axios.get(`${base_url}/api/todos`);
      setTodos(res.data.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  // use effect
  useEffect(() => {
    getTodos();
  }, []);
  // todo list
  const todoList = () => {
    return (
      <div className="flex flex-col gap-[30px]">
        <TodoSkeleton />
        <TodoSkeleton />
        <TodoSkeleton />
        <TodoSkeleton />
        <TodoSkeleton />
        <TodoSkeleton />
        <TodoSkeleton />
      </div>
    );
  };
  // create
  async function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      name: todo,
    };
    try {
      const res = await axios.post(`${base_url}/api/todos`, {
        data: newTodo,
      });
      getTodos();
      setTodo("");
      toast.success("Task Created Succefully", {
        position: "top-right",
      });
      console.log(res);
    } catch (error) {
      toast.error("Failed to Create a Task", {
        position: "top-right",
      });
    }
  }
  // delete
  async function deleteTodo(id) {
    try {
    const res = await axios.delete(`${base_url}/api/todos/${id}`);
      toast.success("Task Created Succefully", {
        position:"top-right",
        duration:3000
      })
      getTodos()
    } catch (error) {
      toast.error("Some Thing Went Wrong !!", {
        position:"top-right",
        duration:5000
      })
    }
  }
  const navigate = useNavigate();
  // use effect
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  return (
    <main className="lg:w-200 w-full mx-auto mt-10">
      <h1 className=" text-3xl text-center  font-bold text-gray-400  cursor-default ">
        Welcome{" "}
        <span className="hover:text-gray-600 duration-300 uppercase">
          {/* fall back value */}
          {userData?.username || ""}
        </span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" h-[100px ]  shadow mt-[20px] p-5 w-full flex justify-center border-gray-300 border items-center gap-2.5 rounded-lg"
      >
        <input
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
          className="border-gray-300 md:w-300 lg:w-full  border-2 rounded-lg outline-0 focus:border-gray-500 px-2 py-2 placeholder:text-[14px] placeholder:font-bold tracking-wide"
          type="text"
          placeholder="What are you working on?"
        />
        <div>
          <AddButton />
        </div>
      </form>
      <div className="tasks  flex flex-col gap-5  mt-5    ">
        {loading ? (
          todoList()
        ) : error ? (
          <Error />
        ) : (
          todos.map(({ documentId ,name }) => (
            <div
              key={documentId}
              className="flex group/parent border-2 rounded-lg   duration-300  hover:border-gray-400 border-gray-300 p-5 justify-between items-center w-full"
            >
              <h2 className="text-gray-700 pb-1 tracking-wide text-xl relative overflow-hidden">
                {name}
                <span className="absolute bottom-0 duration-300 group-hover/parent:right-0 right-full block w-full bg-gray-600 h-[2px]"></span>
              </h2>
              <div className="flex items-center gap-4">
                <EditButton />
                <DeleteButton id={documentId} handleSubmit={deleteTodo} />
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
