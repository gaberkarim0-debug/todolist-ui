import { Link } from "react-router";
import hero from "../assets/hero.png";
import Button from "../ui/Button";
import { IoPersonSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="flex w-200 justify-between mx-auto py-5 items-center">
      <div>
        <Link to={""}>
          <img src={hero} alt="Logo" />
        </Link>
      </div>
      <ul className="flex gap-10 items-center ">
        <li className="overflow-hidden">
          <Link
            to={"home"}
            className="text-xl tracking-wider font-bold text-gray-600 relative group "
          >
            Home
            <span className="absolute w-full  bg-gray-700 h-0.5 bottom-0 block right-full group-hover:right-0 duration-300   "></span>
          </Link>
        </li>
        <li className="overflow-hidden">
        </li>
        <li>
          <Link to={""}>
            <Button>login</Button>
          </Link>
        </li>
        <li>
          <Link to={"register"}>
            <Button>register</Button>
          </Link>
        </li>
        <li className="border-3 rounded-[50%] hover:border-gray-400 duration-300 border-gray-300  p-2 flex w-fit cursor-pointer ">
          <IoPersonSharp />
        </li>
      </ul>
    </nav>
  );
}
