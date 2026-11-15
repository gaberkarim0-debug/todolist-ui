import { useContext, useEffect } from "react";
import { globalStore } from "../Stores/Mainstore";
import { useNavigate } from "react-router";

const Profile = () => {
    // store
      const { token } = useContext(globalStoree);
      const navigate = useNavigate();
      // use effect
      useEffect(() => {
        if (!token) {
          navigate("/");
        }
      }, [token]);
  return (
  
    <div>Profile</div>
  )
}

export default Profile