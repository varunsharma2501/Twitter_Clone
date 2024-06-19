import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import { Outlet } from 'react-router-dom'
import useOtherUsers from '../hooks/useOtherUsers'
import useGetFollowers from '../hooks/useGetFollowers'
import useGetFollowing from '../hooks/useGetFollowing'
import useGetLikes from '../hooks/useGetLikes'
import useGetBookmarks from '../hooks/useGetBookmarks'



const Home=()=>{
  useOtherUsers();
  useGetFollowers();
  useGetFollowing();
  useGetLikes();
  useGetBookmarks();
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSideBar/>
      <Outlet/>
      <RightSideBar/>
    </div>
  )
}

export default Home
