import { useCallback } from "react";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/const";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getRefreshTweet } from "../redux/tweetSlice";

const useAddLike = () => {
  const dispatch = useDispatch();

  const addLike = useCallback(async (id) => {
    try {
      console.log("addLike 1");
      const res = await axios.put(`${TWEET_API_END_POINT}/like/${id}`, {}, {
        withCredentials: true
      });
      console.log("addLike 2");
      dispatch(getRefreshTweet());
      toast.success(res.data.message);
    } catch (error) {
      toast.error("Failed to like tweet: " + error.message);
    }
  }, []);

  return addLike;
};

export default useAddLike;
