import React from 'react'
import { IoIosSend } from "react-icons/io";

function InputMsg() {
    return (
        <>
            <div className='w-full h-full flex items-center p-2'>
                <div className='w-full'>
                    <input placeholder='Write Something...' type="text" className='border-black border rounded-md indent-2 p-3 font-bold w-full ' />
                </div>
                <button className=' w-[40px]  h-full rounded-sm flex items-center justify-center'>
                    <IoIosSend className='text-[30px] text-prime' />
                </button>
            </div>
        </>
    )
}

export default InputMsg