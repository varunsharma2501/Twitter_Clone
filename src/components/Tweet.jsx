import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { CiHeart, CiBookmark } from "react-icons/ci";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import useAddLike from '../hooks/useAddLike';
import useAddBookmark from '../hooks/useAddBookmark';
import useAddComment from '../hooks/useAddComment';
import useDeleteTweet from '../hooks/useDeleteTweet';
// import useUpdateTweet from '../hooks/useUpdateTweet';
import useEditTweet from '../hooks/useEditTweet';

function Tweet({ tweet, flagLike }) {
  const addLike = useAddLike();
  const addBookmark = useAddBookmark();
  const addComment = useAddComment();
  const deleteTweet = useDeleteTweet();
  const editTweet = useEditTweet();
  const { user } = useSelector(store => store.user);

  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isLikeActive, setIsLikeActive] = useState(flagLike);
  const [isBookmarkActive, setIsBookmarkActive] = useState(false);
  const [comment, setComment] = useState('');
  const [newDescription, setNewDescription] = useState(tweet.description);

  // Handlers to toggle the state
  const toggleCommentModal = () => {
    setIsCommentModalVisible(!isCommentModalVisible);
  };

  const toggleEditModal = () => {
    setIsEditModalVisible(!isEditModalVisible);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      addComment(tweet._id, comment);
      setComment(''); // Clear the comment input after submitting
      setIsCommentModalVisible(false); // Close the modal after submitting
    }
  };

  const handleEditSubmit = () => {
    if (newDescription.trim()) {
      editTweet(tweet._id, newDescription);
      setIsEditModalVisible(false); // Close the modal after submitting
    }
  };

  const toggleLike = () => {
    setIsLikeActive(!isLikeActive);
    addLike(tweet._id);
  };

  const toggleBookmark = () => {
    setIsBookmarkActive(!isBookmarkActive);
    addBookmark(tweet._id);
  };

  const deleteHandler = () => {
    deleteTweet(tweet._id);
  };

  return (
    <>
      <div className='border-b border-gray-200'>
        <div>
          <div className='flex p-4'>
            <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" />
            <div className='ml-2 w-full'>
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
                {
                  user?._id === tweet.author._id && (
                    <div className='flex items-center'>
                      <div onClick={deleteHandler} className='hover:bg-red-300 rounded-full cursor-pointer'>
                        <MdDelete />
                      </div>
                      <div onClick={toggleEditModal} className='hover:bg-blue-300 rounded-full cursor-pointer ml-2'>
                        <MdEdit />
                      </div>
                    </div>
                  )
                }
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
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
            <div className='flex justify-end'>
              <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md'
                onClick={handleCommentSubmit}
              >
                Comment
              </button>
              <button
                className='bg-gray-500 text-white px-4 py-2 rounded-md ml-2'
                onClick={toggleCommentModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-lg'>
            <h2 className='text-xl mb-4'>Edit Tweet</h2>
            <textarea
              className='w-full p-2 border border-gray-300 rounded-md mb-4'
              rows="4"
              placeholder="Edit your tweet here..."
              value={newDescription}
              onChange={handleDescriptionChange}
            ></textarea>
            <div className='flex justify-end'>
              <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md'
                onClick={handleEditSubmit}
              >
                Save
              </button>
              <button
                className='bg-gray-500 text-white px-4 py-2 rounded-md ml-2'
                onClick={toggleEditModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Tweet;
