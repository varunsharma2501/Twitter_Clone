import React from 'react'
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

function Tweet({tweet}) {
  return (
    <div className='border-b border-gray-200'>
    <div>
        <div className='flex p-4'>
            <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" />
            <div className=' ml-2 w-full'>
                <div className='flex items-center'>
                    <h1 className='font-bold'>{tweet.author.fullname}</h1>
                    <p className='text-gray-500 text-sm ml-1'>@{tweet.author.username}</p>
                </div>
                <div>
                    <p>{tweet.description}</p>
                </div>
                <div className='flex justify-between my-3'>
                    <div className='flex items-center'>
                        <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                            <FaRegComment size="20px" />
                        </div>
                        <p>{tweet.comments.length}</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
                            <CiHeart size="24px" />
                        </div>
                        <p>{tweet.likes.length}</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='p-2 hover:bg-yellow-200 rounded-full cursor-pointer'>
                            <CiBookmark size="24px" />
                        </div>
                        <p>{tweet.bookmarks.length}</p>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Tweet
