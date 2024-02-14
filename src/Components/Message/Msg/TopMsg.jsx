import React from 'react'
import {  useSelector } from 'react-redux'

function TopMsg() {

    let data = useSelector((e) => {
        return e.user
    })
    let friendData = useSelector((e) => {
        return e.friend
    })

    return (
        <>
            <img src="User.png" className='rounded-full w-[50px] ' />
            <h5 className='font-bold text-[18px]'>{data.uid == friendData.receverId ? friendData.sender : friendData.recever}</h5>
        </>
    )
}

export default TopMsg