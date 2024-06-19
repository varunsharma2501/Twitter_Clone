import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/const";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getRefresh } from "../redux/tweetSlice";
const useCreateTweet = () => {
  const dispatch=useDispatch();
  const createTweet = async (description) => {
    try {
      console.log("useCreateTweet1");

      const res = await axios({
        method: 'post',
        url: `${TWEET_API_END_POINT}/create`,
        data: { description },
        withCredentials: true
      });
      dispatch(getRefresh());
      console.log("tweet2");
      toast.success("Tweet created successfully");
    } catch (error) {
      toast.error("Failed to create tweet: " + error.message);
    }
  };

  return {createTweet};
};

export default useCreateTweet;
