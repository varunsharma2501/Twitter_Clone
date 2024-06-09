import React from 'react'
import Feed from './Feed'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSideBar/>
      <Outlet/>
      <RightSideBar/>
    </div>
  )
}

export default Home
