import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/const";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getFollowingTweets } from "../redux/tweetSlice";
import toast from "react-hot-toast";

const useGetFollowingTweets = (id) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const FollowingTweets = async () => {
            try {
                // console.log("inside UseGetTweet1");
                const res = await axios.get(`${TWEET_API_END_POINT}/followingTweets`,{
                    withCredentials:true
                });
                // console.log("other users are ", res.data.otherUsers); // Correct property access
                // console.log("Other tweets are",res.data.tweets);
                dispatch(getFollowingTweets(res.data.tweets)); // Correct property access
            } catch (error) {
                // console.log(error);
                toast.error(error.message);
            }
        }
        FollowingTweets();
    },[]);
};

export default useGetFollowingTweets;