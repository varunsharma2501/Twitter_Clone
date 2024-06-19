import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
// import useAddFollow from "../hooks/useAddFollow";
import UserCard from "./UserCard";

function RightSideBar() {
  const { otherUsers } = useSelector((store) => store.user);
  // console.log("otherUsers:", otherUsers);

  // Function to handle follow action for a specific user

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

        {/* iterate through otherUsers */}
        <div>
          {!otherUsers || otherUsers.length === 0 ? (
            <p>No More Users</p>
          ) : (
            otherUsers.map((user) => (
              <UserCard key={user._id} user={user} flag={false} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;