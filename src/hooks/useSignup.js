import axios from "axios";
import toast from "react-hot-toast";
import { AUTH_API_END_POINT } from "../utils/const.js";
import { useNavigate } from "react-router-dom";

const useSignup = () =>
{
  const navigate = useNavigate();

  const signup = async ({ fullname, username, email, password, confirmPassword }) => {
    console.log("Fields received for validation:", { fullname, username, email, password, confirmPassword });

      // signup
      const success = handleInputErrors({ fullname, username, password, confirmPassword, email });
      if (!success) return;


      try {
        const res = await axios.post(`${AUTH_API_END_POINT}/signup`, { fullname, username, email, password, confirmPassword }, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        });
        if (res.status === 201) {
          console.log("want to navigate");
          navigate("/");
          toast.success("Signup successful");
        } else {
          toast.error(res.data.error); // Display the error message from the backend
        }
      } catch (error) {
        toast.error(res.error);
        console.log(error);
      }
    }

  return { signup };
  };



const handleInputErrors = ({ fullname, username, password, confirmPassword, email }) => {
  console.log("Validating fields:", { fullname, username, password, confirmPassword, email });
  if (!fullname || !username || !password || !confirmPassword || !email) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (username.includes(" ")) {
    toast.error("Username cannot contain spaces");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};

export default useSignup;
