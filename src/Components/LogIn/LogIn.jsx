import React from 'react'
import LogInForm from './LogInForm'

function LogIn() {
    return (
        <>
            <div className='w-full h-screen flex flex-col items-center justify-center dark:bg-black'>
                {/* <div className='absolute top-5 right-5 '>
                    <DarkMode />
                </div> */}

                <div className=' flex gap-[10px] flex-col'>
                    <div className='flex flex-col items-center' >
                        <img src="logoSvg.svg" alt="Logo" className='logo' />
                        <p className='tag'>Login to continue</p>
                    </div>
                    <div>
                        <LogInForm />
                    </div>

                </div>

            </div>
        </>
    )
}

export default LogIn