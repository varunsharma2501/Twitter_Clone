import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RightSideBar() {
  const { otherUsers } = useSelector((store) => store.user);
  console.log("11")
  console.log(otherUsers)
  console.log("12");
  return (
    <div className="w-[25%]">
      {/* search component */}
      <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none w-full">
        <CiSearch size="20px" />
        <input
          type="text"
          className="bg-transparent outline-none px-2"
          placeholder="Search"
        />
      </div>

      {/* component which holds all the users */}
      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg">Who to follow</h1>

        {/* every single user  */}

       <div>
      {!otherUsers || otherUsers.length === 0 ? (
        <p>No More Users</p>
      ) : (
        otherUsers.map((user) => (
          <div className="flex items-center justify-between my-3" key={user?._id}>
            <div className="flex">
              <div>
                <Avatar
                  src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
                  size="40"
                />
              </div>
              <div className="ml-2">
                <h1 className="font-bold">{user?.fullname}</h1>
                <p className="text-sm">@{user?.username}</p>
              </div>
            </div>
            <div>
              <Link to={`/profile/${user?._id}`}>
                <button className="px-4 py-1 bg-black text-white rounded-full">
                  Profile
                </button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>

      </div>
    </div>
  );
}

export default RightSideBar;
