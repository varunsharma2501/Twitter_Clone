import axios from "axios";
import { USER_API_END_POINT } from "../utils/const";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getOtherUsers } from "../redux/userSlice";
import toast from "react-hot-toast";

const useOtherUsers = () => {
    const {refreshUser}=useSelector(store=>store.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchOtherUsers = async () => {
            try {
                console.log("inside otherUsers1");
                const res = await axios.get(`${USER_API_END_POINT}/getUsers`,{
                    withCredentials:true
                });
                console.log("other users are ", res.data.otherUsers); // Correct property access
                dispatch(getOtherUsers(res.data.otherUsers)); // Correct property access
            } catch (error) {
                // console.log(error);
                toast.error(error.message);
            }
        }
        fetchOtherUsers();
    },[refreshUser]);
};

export default useOtherUsers;