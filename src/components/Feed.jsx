import React from "react";
// import { Route, Switch } from 'react-router-dom';
import {Outlet } from 'react-router-dom';
// import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";
// import Tweet from "./Tweet";
// import useGetOtherTweets from '../hooks/useGetAllTweets';
import useGetAllTweets from "../hooks/useGetAllTweets";
import useGetFollowingTweets from "../hooks/useGetFollowingTweets";
import useGetMyTweets from "../hooks/useGetMyTweets";

const Feed = () => {
  useGetAllTweets(); // Call the custom hook to get other tweets
  useGetFollowingTweets();
  useGetMyTweets();
   // Call the custom hook to get following tweets
  // const { allTweets, followingTweets } = useSelector((store) => store.tweet);

  return (
    <div className="w-[50%]">
      <CreatePost />
      <Outlet/>
    </div>
  );
}

export default Feed;
