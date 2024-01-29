import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import ReactCrop from 'react-image-crop'
// import 'react-image-crop/dist/ReactCrop.css'
import { updateProfile } from "firebase/auth";
import { db } from '../../../FireBase';
import { auth } from '../../../FireBase';

function ProfileSet(props) {

 
    let data = useSelector((e) => {
        return e.data
    })




    let saveIt = () => {
        props.edit.setEdit(false)
    }


    let cancleIt = () => {
        props.edit.setEdit(false)
    }


    return (
        <>
            <div className='absolute top-0 left-0 w-[100%] h-screen flex items-center justify-center bg-[#0000008d] z-20 mx-auto dark:bg-[#ffffff84] '>
                <div className='w-[600px] h-[500px] bg-white overflow-y-scroll flex flex-col gap-[10px] items-center justify-start dark:bg-black rounded-md p-4'>
                    <div>
                        vv
                    </div>
                    <button onClick={saveIt} className='w-[300px] h-[30px] rounded text-white font-bold tracking-wide transition-all duration-[.6s] bg-blue-500 hover:bg-blue-600 '>
                        Save
                    </button>
                    <button onClick={cancleIt} className='w-[300px] h-[30px] rounded text-white font-bold tracking-wide transition-all duration-[.6s] bg-red-500 hover:bg-red-600 '>
                        Cancle
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProfileSet