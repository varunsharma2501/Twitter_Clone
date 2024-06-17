import React from 'react'
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

function AllTweets() {
    const {allTweets } = useSelector((store) => store.tweet);

  return (
    <div>
       {allTweets && allTweets.map((tweet) => (
            <Tweet key={tweet._id} tweet={tweet} />
        ))}
    </div>
  )
}

export default AllTweets
