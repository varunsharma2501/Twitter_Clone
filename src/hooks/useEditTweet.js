import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/const";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getRefreshTweet } from "../redux/tweetSlice";

const useEditTweet = () => {
  const dispatch = useDispatch();

  const editTweet = async (id, newDescription) => {
    try {
      const res = await axios({
        method: 'post',
        url: `${TWEET_API_END_POINT}/edit/${id}`,
        data: { description: newDescription },
        withCredentials: true
      });

      dispatch(getRefreshTweet());
      toast.success("Tweet edited successfully");
    } catch (error) {
      toast.error("Failed to edit tweet: " + error.message);
    }
  };

  return editTweet;
};

export default useEditTweet;
