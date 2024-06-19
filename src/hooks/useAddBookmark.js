import { useCallback } from "react";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/const";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getRefreshTweet } from "../redux/tweetSlice";
// import { getRefresh } from "../redux/tweetSlice";

const useAddBookmark = () => {
  const dispatch = useDispatch();

  const addBookmark = useCallback(async (id) => {
    try {
      console.log("addBookmark 1");
      const res = await axios.put(`${TWEET_API_END_POINT}/bookmark/${id}`, {}, {
        withCredentials: true
      });
      console.log("addLike 2");
      dispatch(getRefreshTweet());
      toast.success(res.data.message);
    } catch (error) {
      toast.error("Failed to like tweet: " + error.message);
    }
  }, []);

  return addBookmark;
};

export default useAddBookmark;
