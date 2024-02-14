import React from 'react'
import TopMsg from './TopMsg'
import BodyMsg from './BodyMsg'
import InputMsg from './InputMsg'

function Msg() {
  return (
    <>
        <div className='h-screen w-full flex flex-col bg-white '>
            <div className=' flex items-center  gap-4 p-2'> 
                <TopMsg />
            </div>
            <div className='h-full w-full p-2 overflow-y-scroll '>
                <BodyMsg />
            </div>
            <div className='h-[80px] w-full '>
                <InputMsg />
            </div>
        </div>
    </>
  )
}

export default Msg