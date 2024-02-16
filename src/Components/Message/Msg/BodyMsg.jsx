import React from 'react'
import { ref, onValue, set, push } from "firebase/database";

function BodyMsg() {



  return (
    <>
        <div className='flex flex-col items-end  gap-2 w-full mt-2'>
            <p className='bg-prime text-white w-fit max-w-[70%] p-3 rounded-xl '>Hlw! How are you?</p>
            <p className='bg-prime text-white w-fit max-w-[70%] p-3 rounded-xl'>Hi</p>
        </div>
        <div className='flex flex-col items-start  gap-2 w-full mt-2'>
            <p className='bg-[#777676] text-white w-fit max-w-[70%] p-3 rounded-xl '>Hlw! How are you Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae repellendus totam magni, laboriosam a earum voluptate suscipit ipsam voluptatem et aliquam! Mollitia dolor ducimus, amet at vitae excepturi cupiditate.</p>
            <p className='bg-[#777676] text-white w-fit max-w-[70%] p-3 rounded-xl'>Hi</p>
        </div>
        
    </>
  )
}

export default BodyMsg