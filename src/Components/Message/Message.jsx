import React from 'react'
import FriendMessage from './Friend/FriendMessage'

function Message() {
  return (
    <>
        <div className='h-screen w-full flex items-center justify-center'>
            <div className='h-screen w-full '>
                <FriendMessage />
            </div>
            <div className='h-screen w-full bg-blue-500'>dd</div>
            <div className='h-screen w-full'>dd</div>
        </div>
    </>
  )
}

export default Message