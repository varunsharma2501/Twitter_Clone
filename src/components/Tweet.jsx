import {React,useState} from 'react'
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
// import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';
import useAddLike from '../hooks/useAddLike';
// import { useState } from "react";

function Tweet({tweet,flagLike}) {
  const addLike=useAddLike();
  console.log("tweet.jsx");
  // console.log("author is ",tweet?.author?._id);
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);
  const [isLikeActive, setIsLikeActive] = useState(flagLike);
  const [isBookmarkActive, setIsBookmarkActive] = useState(false);

  // Handlers to toggle the state
  const toggleCommentModal = () => setIsCommentModalVisible(!isCommentModalVisible);
  const toggleLike = () => {
    setIsLikeActive(!isLikeActive);
    addLike(tweet._id);
  }
  const toggleBookmark = () => setIsBookmarkActive(!isBookmarkActive);


  return (
    <>
    <div className='border-b border-gray-200'>
    <div>
        <div className='flex p-4'>
            <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" />
            <div className=' ml-2 w-full'>
                <Link to={`/profile/${tweet.author._id}`}>
                <div className='flex items-center'>
                    <h1 className='font-bold'>{tweet.author.fullname}</h1>
                    <p className='text-gray-500 text-sm ml-1'>@{tweet.author.username}</p>
                </div>
                </Link>
                <div>
                    <p>{tweet?.description}</p>
                </div>

                <div className='flex justify-between my-3'>
                <div className='flex items-center'>
                <div 
                  className='p-2 hover:bg-green-200 rounded-full cursor-pointer' 
                  onClick={toggleCommentModal}
                >
                  <FaRegComment size="20px" />
                </div>
                <p>{tweet?.comments?.length}</p>
              </div>
              <div className='flex items-center'>
                <div 
                  className={`p-2 rounded-full cursor-pointer ${isLikeActive ? 'bg-pink-500' : 'hover:bg-pink-200'}`} 
                  onClick={toggleLike}
                >
                  <CiHeart size="24px" color={isLikeActive ? 'white' : 'black'} />
                </div>
                <p>{tweet?.likes?.length}</p>
              </div>
              <div className='flex items-center'>
                <div 
                  className={`p-2 rounded-full cursor-pointer ${isBookmarkActive ? 'bg-yellow-500' : 'hover:bg-yellow-200'}`} 
                  onClick={toggleBookmark}
                >
                  <CiBookmark size="24px" color={isBookmarkActive ? 'white' : 'black'} />
                </div>
                <p>{tweet?.bookmarks?.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {isCommentModalVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-lg'>
            <h2 className='text-xl mb-4'>Add a Comment</h2>
            <textarea 
              className='w-full p-2 border border-gray-300 rounded-md mb-4'
              rows="4"
              placeholder="Write your comment here..."
            ></textarea>
            <div className='flex justify-end'>
              <button 
                className='bg-blue-500 text-white px-4 py-2 rounded-md'
                onClick={toggleCommentModal}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      )}
    
    </>
  )
}

export default Tweet
