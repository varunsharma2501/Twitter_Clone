import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

function Followers() {
  const { followers, following } = useSelector((store) => store.user);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Followers List</h1>
      <div className="space-y-4">
        {!followers || followers.length === 0 ? (
          <p className="text-gray-500">No Followers Yet</p>
        ) : (
          followers.map((user) => {
            const isFollowing = following.some(followedUser => followedUser._id === user._id);
            return (
              <UserCard key={user._id} user={user} flag={isFollowing} />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Followers;
