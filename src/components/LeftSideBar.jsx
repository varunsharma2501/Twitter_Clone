import React from "react";
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useLogout from "../hooks/useLogout";
import store from "../redux/store";

function LeftSideBar() {
  const {user} = useSelector(store=>store.user);
  // console.log("leftSidebar",user);
  const handleLogout=useLogout();
  return (
    <div className="w-[20%]">
      <div>
        {/* the container for image of the logo */}
        <div>
          <img
            className="ml-5"
            width={"24px"}
            src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png"
            alt="twitter-logo"
          />
        </div>

        {/* all the home buttons below it */}

        <div className="my-4">
          
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <Link to="/allTweets" className="flex items-center">
            <div>
              <CiHome size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
            </Link>
          </div>

          <Link to="/allTweets">          
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
            <CiHashtag size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>
          </Link>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
            <IoIosNotificationsOutline size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Notifications</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <Link to={`/profile/${user?._id}`} className="flex items-center">
            <div>
                <CiUser size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Profile</h1>
            </Link>
          </div>

          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <Link to={`/bookmarkedTweets`} className="flex items-center">
                        <div>
                            <CiBookmark size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
            </Link>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full" onClick={handleLogout}>
            <div>
              <AiOutlineLogout size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Logout</h1>
          </div>
        
          <button className='px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>
             
        </div>

      </div>
    </div>
  );
}

export default LeftSideBar;
