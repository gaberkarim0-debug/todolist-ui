import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col  min-h-dvh">
      <Navbar />
      <div className="grow ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
