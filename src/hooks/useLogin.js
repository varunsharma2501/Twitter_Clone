import axios from "axios";
import toast from "react-hot-toast";
import { AUTH_API_END_POINT } from "../utils/const";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { getUser } from "../redux/userSlice";

const useLogin = () =>
{
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const login = async ({ username,password}) => {
    console.log("log 1")

      const success = handleInputErrors({ username, password });
      if (!success) return;

      console.log("log3");

      try {
        const res = await axios.post(`${AUTH_API_END_POINT}/login`, { username,password}, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        });

        dispatch(getUser(res?.data?.user));
        if (res.status === 200) {
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
 console.log('log2');
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
