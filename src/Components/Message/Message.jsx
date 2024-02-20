import React from 'react'
import Navbar from '../Navbar/Navbar'
import FriendMessage from './Friend/FriendMessage'
import Msg from './Msg/Msg'
import FriendProfile from './FriendProfile/FriendProfile'

function Message() {
  return (
    <>
        <div className='h-screen w-full flex items-center justify-center'>
          <div className='w-[150px] h-screen relative  '>
            <Navbar />
          </div>
            <div className='h-screen w-full '>
                <FriendMessage />
            </div>
            <div className='h-screen w-full '>
              <Msg />
            </div>
            <div className='h-screen w-full'>
              <FriendProfile />
            </div>
        </div>
    </>
  )
}

export default Message