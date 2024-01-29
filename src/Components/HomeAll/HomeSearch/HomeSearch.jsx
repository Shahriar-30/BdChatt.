import React from 'react'
import { IoSearchSharp } from "react-icons/io5";


function HomeSearch() {
    return (
        <>
            <div className='form_box max-w-[250px]  mx-auto  md:mr-4 md:float-right'>
                <IoSearchSharp className='absolute text-[25px] font-bold top-[10px] cursor-pointer right-[10px] ' />
                <input type="text" placeholder='Search' className='form_input py-1' />
            </div>
        </>
    )
}

export default HomeSearch