import axios from "axios";
import { USER_API_END_POINT } from "../utils/const";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getLikes} from "../redux/userSlice";
import toast from "react-hot-toast";

const useGetLikes = () => {
    const dispatch = useDispatch();
    const refresh=useSelector(store=>store.tweet)
    useEffect(()=>{
        const fetchLikes = async () => {
            try {
                const res = await axios.get(`${USER_API_END_POINT}/getLikes`,{
                    withCredentials:true
                });
                dispatch(getLikes(res.data.likes)); // Correct property access
            } catch (error) {
                // console.log(error);
                toast.error(error.message);
            }
        }
        fetchLikes();
    },[refresh]);
};

export default useGetLikes;