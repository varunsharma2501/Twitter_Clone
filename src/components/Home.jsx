import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import { Outlet } from 'react-router-dom'
import useOtherUsers from '../hooks/useOtherUsers'



const Home=()=>{
  useOtherUsers();
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSideBar/>
      <Outlet/>
      <RightSideBar/>
    </div>
  )
}

export default Home
