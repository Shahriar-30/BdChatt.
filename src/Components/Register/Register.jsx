import React from 'react'
import RegisterForm from './RegisterForm'

function Register() {
  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center gap-[20px] px-[20px md:flex-row md:justify-evenly'>
        {/* <div className='absolute top-5 right-5 '>
          <DarkMode />
        </div> */}

        <div className='flex flex-col md:justify-start md:w-full md:max-w-[370px] md:h-[60%]  '>

          <div className=''>
            <img src="logoSvg.svg" className='logo' />
            <p className='tag pl-[10px]'>Register to continue</p>
            <h2 className='font-fair font-semibold hidden text-[50px] mt-[5px] md:block'>
              Stay Connected With Your Family And Friends
            </h2>
          </div>

        </div>

        <div className='lg:bg-white lg:p-7 lg:px-14'>
          <RegisterForm />
        </div>

      </div>
    </>
  )
}

export default Register