import axios from "axios";
import toast from "react-hot-toast";
import { AUTH_API_END_POINT } from "../utils/const.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getUser } from "../redux/userSlice";

const useSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async ({ fullname, username, email, password, confirmPassword }) => {
    // Check for input errors
    const success = handleInputErrors({ fullname, username, password, confirmPassword, email });
    if (!success) return;

    try {
      // Make the API request
      const response = await axios.post(`${AUTH_API_END_POINT}/signup`, { fullname, username, email, password, confirmPassword }, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      });

      const data = response.data;

      if (data.error) {
        throw new Error(data.error);
      }

      if (response.status === 201) {
        dispatch(getUser(data.user));
        navigate("/");
        toast.success("Signup successful");
      } else {
        toast.error(data.error); // Display the error message from the backend
      }
    } catch (error) {
      toast.error(error.message || 'Signup failed');
      console.log(error);
    }
  }

  return { signup };
};

const handleInputErrors = ({ fullname, username, password, confirmPassword, email }) => {
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
