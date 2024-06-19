import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/const";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";
import toast from "react-hot-toast";
import store from "../redux/store";

const useGetAllTweets = (id) => {
    const dispatch = useDispatch();
    // const {refresh}=useSelector(store=>store.tweet);
    useEffect(()=>{
        const AllTweets = async () => {
            try {
                // console.log("inside UseGetTweet1");
                const res = await axios.get(`${TWEET_API_END_POINT}/all`,{
                    withCredentials:true
                });
                // console.log("other users are ", res.data.otherUsers); // Correct property access
                // console.log("Other tweets are",res.data.tweets);
                dispatch(getAllTweets(res.data.tweets)); // Correct property access
            } catch (error) {
                // console.log(error);
                toast.error(error.message);
            }
        }
        AllTweets();
    },[]);
};

export default useGetAllTweets;