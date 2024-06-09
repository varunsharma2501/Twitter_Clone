import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import Avatar from "react-avatar";


function Profile() {
  return (
    <div className='w-[50%] border-l border-r border-gray-200'>
    <div>
        <div className='flex items-center py-2'>
            <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                <IoMdArrowBack size="24px" />
            </Link>
            <div className='ml-2'>
                <h1 className='font-bold text-lg'>Varun Sharma</h1>
                <p className='text-gray-500 text-sm'>10 posts</p>
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
            <h1 className='font-bold text-xl'>Varun Sharma</h1>
            <p>@varuncares22</p>
        </div>
        <div className='m-4 text-sm'>
            <p>🌐 Exploring the web's endless possibilities with MERN Stack 🚀 | Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me on this coding journey!</p>
        </div>
    </div>
</div>
  )
}

export default Profile
