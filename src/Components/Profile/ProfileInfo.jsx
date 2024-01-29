import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RiEdit2Fill } from "react-icons/ri";
import ProfileSet from './ProfileSet';

function ProfileInfo() {

    const [edit, setEdit] = useState(false)

    let data = useSelector((e) => {
        return e.user
    })



    return (
        <>
            {
                edit ?
                    <ProfileSet edit={{ setEdit }} />
                    :
                    <div>

                        {/* ================== top profile ================ */}
                        <div className='  relative w-fit h-fit mx-auto mt-[50px]'>

                            {/* ================== banner img ================ */}

                            {/* ================== profile img ================ */}
                            <div className='w-full  relative]'>
                                <div className='w-[120px] h-[120px] rounded-full overflow-hidden border-green-500 border-[2px] mx-auto'>
                                    {
                                        data.photoURL ?
                                            <img src={data.photoURL} className='w-full h-full object-cover' />
                                            :
                                            <img src="User.png" className='w-full h-full object-cover' />
                                    }
                                </div>
                            </div>
                        </div>

                        {/* ================== edit profile ================ */}
                        <div className=' w-full  flex items-center justify-center mt-[10px]'>
                            <div>
                                <button className='flex items-center justify-center gap-1 border-[1px] border-[#495057] px-[10px] py-[5px] rounded-full transition-all duration-700 font-semibold hover:bg-[#CED4DA] dark:hover:bg-[#495057] dark:text-[#eee]'>
                                    <RiEdit2Fill />
                                    <p onClick={() => setEdit(true)}>Edit Profile</p>
                                </button>
                            </div>
                        </div>

                        {/* ================== info profile ================ */}
                        <div className=' flex items-center justify-center mt-[30px] w-full max-w-[998px] mx-auto'>
                            <div className='font-semibold dark:text-[#eee]'>
                                <div className='transition-all duration-700 flex gap-2 dark:border-[#fff] p-2 mb-1'>
                                    <p className='select-none'>Name:</p>
                                    <p>{data.displayName}</p>
                                </div>
                                <div className='transition-all duration-700 flex gap-2 dark:border-[#fff] p-2 mb-1'>
                                    <p className='select-none'>Email:</p>
                                    <p className='text-[#000000a0] dark:text-[#ffffff92] '>{data.email}</p>
                                </div>
                                <div className='transition-all duration-700 flex gap-2 dark:border-[#fff] p-2 mb-1'>
                                    <p className='select-none'>Phone Number:</p>
                                    <p>{
                                        data.phoneNumber ?
                                            data.phoneNumber
                                            :
                                            "null"
                                    }</p>
                                </div>
                            </div>
                        </div>

                    </div>
            }
        </>
    )
}

export default ProfileInfo