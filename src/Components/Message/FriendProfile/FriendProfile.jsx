import React from 'react'
import { useSelector } from 'react-redux'

function FriendProfile() {

    let friendData = useSelector((e) => {
        return e.friend
    })
    console.log(friendData);

  return (
    <>
    <div className=' h-screen w-full flex flex-col items-center gap-[20px] pt-6'>
        <div>
            <img src="User.png" className='w-[150px] rounded-full'  />
        </div>
        <div className='flex flex-col items-center'>
            <p className='font-bold text-[20px]'>{friendData.name}</p>
            <p className='font-bold text-[20px]'>{friendData.email}</p>
        </div>
    </div>
    </>
  )
}

export default FriendProfile