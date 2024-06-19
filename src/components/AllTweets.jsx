import React from 'react'
import Tweet from "./Tweet";
import { useSelector } from "react-redux";
import store from '../redux/store';

function AllTweets() {
    const {allTweets} = useSelector((store) => store.tweet);
    console.log("Alltweets1");
  return (
    <div>
       {allTweets && allTweets.map((tweet) => (
            <Tweet key={tweet?._id} tweet={tweet} />
        ))}
    </div>
  )
}

export default AllTweets
