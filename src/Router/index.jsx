import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";
import NotFound from "../pages/NotFound";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route path="home" element={<Home/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route index element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
