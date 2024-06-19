import React from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import UserCard from './UserCard';

function Following() {
    const {following}=useSelector((store)=>store.user);

  return (
    <div>
        <h1>Followers List</h1> 
        <div>
          {!following || following.length === 0 ? (
            <p>No Followers Yet</p>
          ) : (
            following.map((user) => (
              <UserCard key={user._id} user={user} flag={true} />
            ))
          )}
        </div>

    </div>
  )
}

export default Following;
