import { useContext, useEffect } from "react";
import AddButton from "../ui/AddButton";
import DeleteButton from "../ui/DeleteButton";
import EditButton from "../ui/EditButton";
import { globalStore } from "../Stores/Mainstore";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Home = () => {
  // vars
  const todos = [
    {
      name: "eat",
    },
    {
      name: "play",
    },
  ];
  // store
  const { token } = useContext(globalStore);
  const navigate = useNavigate();
  // use effect
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  return (
    <main className="lg:w-200 w-full mx-auto mt-10">
      <h1 className=" text-3xl text-center font-bold text-gray-400 hover:text-gray-600 duration-300 cursor-default ">
        Welcome <span>Kareem</span>
      </h1>
      <form className=" h-[100px ]  shadow mt-[20px] p-5 w-full flex justify-center border-gray-300 border items-center gap-2.5 rounded-lg">
        <input
          className="border-gray-300 md:w-300 lg:w-full  border-2 rounded-lg outline-0 focus:border-gray-500 px-2 py-2 placeholder:text-[14px] placeholder:font-bold tracking-wide"
          type="text"
          placeholder="What are you working on?"
        />
        <div>
          <AddButton />
        </div>
      </form>
      <div className="tasks  flex flex-col gap-5  mt-5    ">
        {todos.map(({ name }, i) => (
          <div
            key={i}
            className="flex group/parent border-2 rounded-lg   duration-300  hover:border-gray-400 border-gray-300 p-5 justify-between items-center w-full"
          >
            <h2 className="text-gray-700 pb-1 tracking-wide text-xl relative overflow-hidden">
              {name}
              <span className="absolute bottom-0 duration-300 group-hover/parent:right-0 right-full block w-full bg-gray-600 h-[2px]"></span>
            </h2>
            <div className="flex items-center gap-4">
              <EditButton />
              <DeleteButton />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
