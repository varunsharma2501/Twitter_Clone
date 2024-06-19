import axios from "axios";
import { USER_API_END_POINT } from "../utils/const";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getRefreshUser } from "../redux/userSlice";

const useAddFollow = () => {
  const dispatch = useDispatch();

  const followUser = async (id) => {
    try {
      console.log("addFollow 1");
      const res = await axios.put(`${USER_API_END_POINT}/follow/${id}`, {}, {
        withCredentials: true
      });
      console.log("addFollow 2");
      dispatch(getRefreshUser());
      toast.success(res.data.message);
    } catch (error) {
      toast.error("Failed to follow user: " + error.message);
    }
  };

  return followUser;
};

export default useAddFollow;
