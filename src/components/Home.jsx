import React from 'react'
import Feed from './Feed'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

function Home() {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSideBar/>
      <Feed/>
      <RightSideBar/>
    </div>
  )
}

export default Home
