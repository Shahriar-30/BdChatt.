import React from 'react'
import { IoIosSend } from "react-icons/io";
import { BsEmojiSunglasses } from "react-icons/bs";

function InputMsg() {
    return (
        <>
            <div className='w-full h-full flex items-center p-2'>
                <div className='w-[40px]'>
                </div>
                <div className='w-full relative flex items-center border-black border'>
                <input placeholder='Write Something...' type="text" className='rounded-md indent-2 p-3 font-bold w-full outline-none' />


                    <div className=' bg-[#fff] pr-2'>
                        <BsEmojiSunglasses className='text-[25px] text-yellow-800' />
                    </div>
                </div>
                <button className=' w-[40px] ml-2  h-full rounded-sm flex items-center justify-center'>
                    <IoIosSend className='text-[35px] text-prime' />
                </button>
            </div>
        </>
    )
}

export default InputMsg