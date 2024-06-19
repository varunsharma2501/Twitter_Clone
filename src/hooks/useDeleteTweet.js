import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/const";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getRefreshTweet } from "../redux/tweetSlice";
const useDeleteTweet = () => {
  const dispatch=useDispatch();
  const deleteTweet = async (id) => {
    try {
      console.log("deleteTweet1");

      const res = await axios({
        method: 'put',
        url: `${TWEET_API_END_POINT}/delete/${id}`,
        withCredentials: true
      });
    //   console.log("Sent the refresh tweet in useCreatetweet");
      dispatch(getRefreshTweet());
    //   console.log("tweet2");
      toast.success("Tweet deleted successfully");
    } catch (error) {
      toast.error("Failed to delete tweet: " + error.message);
    }
  };

  return deleteTweet;
};

export default useDeleteTweet;
