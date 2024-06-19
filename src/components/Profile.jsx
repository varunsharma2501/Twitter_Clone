import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import Avatar from "react-avatar";
import { useSelector,useDispatch } from 'react-redux'
import useGetProfile from '../hooks/useGetProfile'
import useGetMyTweets from '../hooks/useGetMyTweets';
import Tweet from './Tweet';

function Profile() {
    const {id}=useParams();
    useGetProfile(id);
    useGetMyTweets();
    // console.log("getProfile ",id);
    const {profile}=useSelector(store=>store.user);
    const {myTweets}=useSelector(store=>store.tweet);
    // const dispatch = useDispatch();


  return (
    <>


    <div className='w-[50%] border-l border-r border-gray-200'>

    <div>
        <div className='flex items-center py-2'>
            <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                <IoMdArrowBack size="24px" />
            </Link>
            <div className='ml-2'>
                <h1 className='font-bold text-lg'>{profile?.name}</h1>
                <p className='text-gray-500 text-sm'>{profile?.tweets?.length} tweets</p>
            </div>
        </div>
        <img src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360" alt="banner" />
        <div className='absolute top-52 ml-2 border-4 border-white rounded-full overflow-hidden'>
            <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="120" />
        </div>
        <div className='text-right m-4'>
                    <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400'>Edit Profile</button>
        </div>
        <div className='m-4'>
            <h1 className='font-bold text-xl'>{profile?.fullname}</h1>
            <p>@{profile?.username}</p>
        </div>
        <div className='m-4 text-sm'>
            <p>{profile?.bio}</p>
        </div>
    </div>

    <div className='flex items-center justify-evenly border-b border-gray-200'>
                    <Link to="/followers">
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-semibold text-gray-600 text-lg'>Followers</h1>
                    </div>
                    </Link>
                    <Link to="/following">
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
                    </div>
                    </Link>
                </div>
    <div>

       {myTweets && myTweets.map((tweet) => (
            <Tweet key={tweet._id} tweet={tweet} />
        ))}
    </div>
    </div>

   
    </>
  )
}

export default Profile
