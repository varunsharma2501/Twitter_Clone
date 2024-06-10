import axios from "axios";
import toast from "react-hot-toast";
import { AUTH_API_END_POINT } from "../utils/const";
import { useNavigate } from "react-router-dom";

const useLogin = () =>
{
  const navigate = useNavigate();

  const login = async ({ username,password}) => {
    // console.log("Fields received for validation:", { fullname, username, email, password, confirmPassword });

      const success = handleInputErrors({ username, password });
      if (!success) return;

      try {
        const res = await axios.post(`${AUTH_API_END_POINT}/login`, {  username,password}, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        });
        if (res.status === 201) {
          console.log("want to navigate");
          navigate("/");
          toast.success("Login successful");
        } else {
          toast.error(res.data.error); // Display the error message from the backend
        }
      } catch (error) {
        toast.error(res.error);
        console.log(error);
      }
    }

  return { login };
  };



const handleInputErrors = ({ username, password}) => {
 
  if (!username || !password ) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (username.includes(" ")) {
    toast.error("Username cannot contain spaces");
    return false;
  }

  return true;
};

export default useLogin;
