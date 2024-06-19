import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/const";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
// import { getRefresh } from "../redux/tweetSlice";

const useAddLike = async (id) => {
    const dispatch=useDispatch();
  try {
    console.log("addLike 1");
    const res = await axios.put(`${TWEET_API_END_POINT}/like/${id}`, {}, {
      withCredentials: true
    });
    console.log("addLike 2");
    // dispatch(getRefresh());
    toast.success(res.data.message);
  } catch (error) {
    toast.error("Failed to follow user: " + error.message);
  }
};

export default useAddLike;
