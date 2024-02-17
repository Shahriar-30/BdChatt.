import React from 'react'
import { MdImage } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";

function OtherMsg() {
    return (
        <>
            <div className='w-[200px] h-[70px] select-none flex flex-col gap-1 absolute bottom-[77px] bg-white p-2'>
                <div className=' cursor-pointer w-full border border-y-black p-1 flex transition-all duration-500 hover:bg-[#00000019] '>
                    <MdImage className='text-[20px]' />
                    <p className='font-bold'>Send a image</p>
                </div>
                <div className=' cursor-pointer w-full border border-y-black p-1 flex transition-all duration-500 hover:bg-[#00000019] '>
                    <MdKeyboardVoice className='text-[20px]' />
                    <p className='font-bold'>Send a voice</p>
                </div>
            </div>
        </>
    )
}

export default OtherMsg