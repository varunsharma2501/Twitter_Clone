import React from "react";
// import { Route, Switch } from 'react-router-dom';
import {Outlet } from 'react-router-dom';
// import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";
// import Tweet from "./Tweet";
import useGetOtherTweets from '../hooks/useGetOtherTweets';
import useGetFollowingTweets from "../hooks/useGetFollowingTweets";

const Feed = () => {
  useGetOtherTweets(); // Call the custom hook to get other tweets
  useGetFollowingTweets(); // Call the custom hook to get following tweets
  // const { allTweets, followingTweets } = useSelector((store) => store.tweet);

  return (
    <div className="w-[50%]">
      <CreatePost />
      <Outlet/>
    </div>
  );
}

export default Feed;
