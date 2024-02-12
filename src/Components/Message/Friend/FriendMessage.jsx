import React from 'react'
import { FaPeopleRobbery } from "react-icons/fa6";
import AllFriends from './AllFriends';

function FriendMessage() {
    return (
        <>
            <div className=' w-full h-screen flex flex-col p-3'>
                <div className='flex gap-3'>
                    <FaPeopleRobbery className={`font-bold text-[30px] text-prime `} />
                    <h2 className='font-bold text-[25px] select-none  dark:text-[#eee]'> Friends</h2>
                </div>
                <div>
                    <div className='h-[90vh] overflow-y-scroll'>
                       <AllFriends/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FriendMessage