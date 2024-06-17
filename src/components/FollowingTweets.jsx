import React from 'react'
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

function FollowingTweets() {
    const {followingTweets } = useSelector((store) => store.tweet);

  return (
    <div>
       {followingTweets && followingTweets.map((tweet) => (
            <Tweet key={tweet._id} tweet={tweet} />
        ))}
    </div>
  )
}

export default FollowingTweets
