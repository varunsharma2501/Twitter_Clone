import React, { useState } from 'react';
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import useCreateTweet from '../hooks/useCreateTweet';
import { Link } from 'react-router-dom';

function CreatePost() {
    const { createTweet } = useCreateTweet();
    const [description, setDescription] = useState("");

    const handleCreateTweet = async () => {
        await createTweet(description);
        setDescription(""); // Clear the input field after tweet is created
    };

    return (
        <div className='w-[100%]'>
            <div>
                <div className='flex items-center justify-evenly border-b border-gray-200'>
                    <Link to="/allTweets">
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
                    </div>
                    </Link>
                    <Link to="/followingTweets">
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
                    </div>
                    </Link>
                </div>

                <div>
                    <div className='flex items-center p-4'>
                        <div>
                            <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" />
                        </div>
                        <input
                            name="description"
                            className='w-full outline-none border-none text-xl ml-2'
                            type="text"
                            placeholder='What is happening?!'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                        <div>
                            <CiImageOn size="24px" />
                        </div>
                        <button onClick={handleCreateTweet} className='bg-[#1D9BF0] px-4 py-1 text-lg text-white text-right border-none rounded-full'>Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
