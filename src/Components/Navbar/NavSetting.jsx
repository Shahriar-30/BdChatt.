import React, { useEffect, useRef, useState } from 'react';
import { IoSettings } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

function NavSetting() {

    // let take = useRef();
    const [showSeting, setShowSeting] = useState(false);

    // console.log(take.current);

    let showSet = () => {
        showSeting === true ? setShowSeting(false) : setShowSeting(true);
    }


    // useEffect(() => {
    //     document.body.addEventListener("click", (e) => {
    //         setShowSeting(false)
    //     })
    // }, [])



    return (
        <>
            <div  >
                <abbr title="Setting">
                    <div onClick={showSet} className='transition-all duration-800 cursor-pointer p-[6px] rounded-md'>
                        <IoSettings className=' text-[25px] ' />
                    </div>
                </abbr>
                {
                    showSeting ?
                        <div className='w-[300px] h-[200px] bg-[#212529] text-white rounded-md absolute  bottom-[50px] left-[50px] py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                            <div className='w-full flex items-center justify-between px-4  border-b-[2px] border-[#eee]'>
                                {/* <p className='text-[20px] font-bold'>Theme</p> <div className=' relative top-[3px]'><DarkMode /></div> */}
                            </div>
                            <div className='w-full h-full flex items-center justify-center  text-red-600 '>
                                <div className='flex gap-1 items-center transition-all duration-600  hover:bg-[rgba(0,0,0,0.19)] cursor-pointer p-[6px] rounded-md'>
                                    <TbLogout className='text-[35px]' />
                                    <p className='font-semibold'>Log Out</p>
                                </div>
                            </div>
                        </div>
                        :
                        ""
                }
            </div>

        </>
    )
}

export default NavSetting