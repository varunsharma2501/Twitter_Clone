import axios from "axios";
import { USER_API_END_POINT } from "../utils/const";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getMyProfile } from "../redux/userSlice";

const useGetProfile = (id) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchMyProfile = async () => {
            try {
                // console.log("getProfile 1");
                const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`,{
                    withCredentials:true
                });
                // console.log(res);
                dispatch(getMyProfile(res.data.user));
            } catch (error) {
                toast.error(error.message);
                // console.log(error);
            }
        }
        fetchMyProfile();
    },[id]);
};

export default useGetProfile;