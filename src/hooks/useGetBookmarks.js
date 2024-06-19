import axios from "axios";
import { USER_API_END_POINT } from "../utils/const";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getBookmarks} from "../redux/userSlice";
import toast from "react-hot-toast";

const useGetBookmarks = () => {
    const dispatch = useDispatch();
    const refresh=useSelector(store=>store.tweet)
    useEffect(()=>{
        const fetchBookmarks = async () => {
            try {
                const res = await axios.get(`${USER_API_END_POINT}/getBookmarks`,{
                    withCredentials:true
                });
                dispatch(getBookmarks(res.data.bookmarks)); // Correct property access
            } catch (error) {
                // console.log(error);
                toast.error(error.message);
            }
        }
        fetchBookmarks();
    },[]);
};

export default useGetBookmarks;