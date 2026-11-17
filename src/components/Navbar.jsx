import { Link, useLocation } from "react-router";
import hero from "../assets/hero.png";
import Button from "../ui/Button";
import { IoPersonSharp } from "react-icons/io5";
import { useContext } from "react";
import { globalStore } from "../Stores/Mainstore";
import toast from "react-hot-toast";

export default function Navbar() {
  const { token, setToken } = useContext(globalStore);
  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    toast.success("You have been successfully logged out!", {
      duration: 3000,
    });
    setToken(null);
  }
  const location = useLocation();
  return (
    <nav className="flex md:w-full lg:w-200 justify-between mx-auto py-5 gap-5 md:gap-0 items-center">
      <div>
        <Link to={"/home"}>
          <img src={hero} alt="Logo" />
        </Link>
      </div>
      <ul className="flex gap-10 items-center ">
        {token ? (
          <>
            <li className="border-3 rounded-[50%] hover:border-gray-400 duration-300 border-gray-300  p-2 flex w-fit cursor-pointer ">
              <Link to={"profile"}>
                <IoPersonSharp />
              </Link>
            </li>
            <Button handleClick={logOut}>logout</Button>
          </>
        ) : (
          <>
            {location.pathname == "/register" && (
              <li>
                <Link to={""}>
                  <Button>login</Button>
                </Link>
              </li>
            )}
            {location.pathname == "/" && (
              <li>
                <Link to={"register"}>
                  <Button>register</Button>
                </Link>
              </li>
            )}
          </>
        )}
      </ul>
    </nav>
  );
}
