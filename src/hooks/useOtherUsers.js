import axios from "axios";
import { USER_API_END_POINT } from "../utils/const";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getOtherUsers } from "../redux/userSlice";

const useOtherUsers = (id) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchOtherUsers = async () => {
            try {
                const res = await axios.get(`${USER_API_END_POINT}/getUsers`,{
                    withCredentials:true
                });
                console.log("other users are ", res.data.users); // Correct property access
                dispatch(getOtherUsers(res.data.users)); // Correct property access
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers();
    },[id]);
};
export default useOtherUsers;