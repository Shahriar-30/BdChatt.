import React from 'react'
import { MdAdd } from "react-icons/md";
import { MdEmojiPeople } from "react-icons/md";

function RequestHome() {
    return (
        <>
            <div className='w-full  min-w-[300px] max-w-[320px] bg-[#fff]  rounded-md p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] dark:bg-[#212529]'>
                <div className=' w-full flex gap-1 items-center p-1 pl-2  border-b-[3px] border-[#eee]  '>
                    <MdEmojiPeople className='font-bold text-[28px] text-prime' />
                    <h2 className='font-bold text-[20px] select-none   dark:text-[#eee]'>Request</h2>
                </div>


                <div className='h-[200px] overflow-y-scroll'>

                    <div className='people dark:bg-[#495057]'>
                        <div className='  people_one dark:bg-[#495057]'>
                            <img src="simon.png" className=' w-[40px] h-[40px] rounded-full' />
                            <div>
                                <h3 className=' font-bold text-[17px]  dark:text-[#eee]'>Simon Png</h3>
                            </div>
                        </div>
                        <div className='] cursor-pointer font-extrabold text-[25px] transition-all duration-600 dark:hover:bg-[rgba(255,254,254,0.11)] hover:bg-[rgba(0,0,0,0.19)] p-[6px] rounded-md  dark:text-[#eee]'>
                            <MdAdd />
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default RequestHome