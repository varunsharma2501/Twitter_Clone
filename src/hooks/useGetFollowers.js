import axios from "axios";
import { USER_API_END_POINT } from "../utils/const";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getFollowers} from "../redux/userSlice";
import toast from "react-hot-toast";

const useGetFollowers = () => {
    // const refreshUser=useSelector(store=>store.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchFollowers = async () => {
            try {
                console.log("inside getFollowers1");
                const res = await axios.get(`${USER_API_END_POINT}/getFollowers`,{
                    withCredentials:true
                });
                // console.log("Followers are ",res.data.followers);
                // console.log("other users are ", res.data.otherUsers); // Correct property access
                dispatch(getFollowers(res.data.followers)); // Correct property access
            } catch (error) {
                // console.log(error);
                toast.error(error.message);
            }
        }
        fetchFollowers();
    },[]);
};

export default useGetFollowers;