import axios from "axios";
import { USER_API_END_POINT } from "../utils/const";
import toast from "react-hot-toast";

const useAddFollow = async (id) => {
  try {
    console.log("addFollow 1");
    const res = await axios.put(`${USER_API_END_POINT}/follow/${id}`, {}, {
      withCredentials: true
    });
    console.log("addFollow 2");
    toast.success("User Followed Successfully");
  } catch (error) {
    toast.error("Failed to follow user: " + error.message);
  }
};

export default useAddFollow;
