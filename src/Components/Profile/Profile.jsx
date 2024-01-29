import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProfileInfo from './ProfileInfo'

function Profile() {

    return (
        <>
            <div className='flex h-screen'>
                <div className='w-[50px] h-screen relative  '>
                    <Navbar />

                </div>
                <div className='h-screen w-full  dark:bg-[black]'>
                    <ProfileInfo />
                </div>
            </div>
        </>
    )
}

export default Profile