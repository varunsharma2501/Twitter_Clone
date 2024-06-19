import axios from "axios";
import { USER_API_END_POINT } from "../utils/const";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import {getFollowing} from "../redux/userSlice";
import toast from "react-hot-toast";

const useGetFollowing = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchFollowing = async () => {
            try {
                console.log("inside getFollowing1");
                const res = await axios.get(`${USER_API_END_POINT}/getFollowing`,{
                    withCredentials:true
                });
                console.log("Currently following ",res.data.following);
                // console.log("other users are ", res.data.otherUsers); // Correct property access
                dispatch(getFollowing(res.data.following)); // Correct property access
            } catch (error) {
                // console.log(error);
                toast.error(error.message);
            }
        }
        fetchFollowing();
    },[]);
};

export default useGetFollowing;