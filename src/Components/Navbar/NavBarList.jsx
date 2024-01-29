import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";
import { Link } from 'react-router-dom'

function NavBarList() {
    
    

    return (
        <>
            <ul className='w-full flex flex-col items-center justify-center gap-[20px] mt-[30px]'>
                <li>
                    <Link to={'/home'}>
                        <abbr title="Home">
                            <div className='transition-all duration-600 hover:bg-[rgba(0,0,0,0.19)] p-[6px] rounded-md'>
                                <FaHome className='text-[25px] ' />
                            </div>
                        </abbr>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <abbr title="Chats">
                            <div className='transition-all duration-600  hover:bg-[rgba(0,0,0,0.19)] p-[6px] rounded-md'>
                                <IoMdChatboxes className='text-[28px] ' />
                            </div>
                        </abbr>
                    </Link>
                </li>
                <li>
                    <Link to={'/profile'}>
                        <abbr title="Profile">
                            <div className='transition-all duration-600 hover:bg-[rgba(0,0,0,0.19)] p-[6px] rounded-md'>
                                <FaUser className='text-[25px] ' />
                            </div>
                        </abbr>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NavBarList