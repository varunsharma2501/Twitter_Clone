import { useCallback } from "react";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/const";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getRefreshTweet } from "../redux/tweetSlice";
// import { getRefresh } from "../redux/tweetSlice";

const useAddComment = () => {
  const dispatch = useDispatch();
  
  const addComment = useCallback(async (id,comment) => {
    try {
      console.log("addComment 1");
      const res = await axios.post(`${TWEET_API_END_POINT}/comment/${id}`, {
        comment
      }, {
        withCredentials: true
      });
      console.log("addLike 2");
      dispatch(getRefreshTweet());
      toast.success(res.data.message);
    } catch (error) {
      toast.error("Failed to like tweet: " + error.message);
    }
  }, []);

  return addComment;
};

export default useAddComment;
