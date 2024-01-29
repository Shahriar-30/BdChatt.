import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBarList from './NavBarList';
import NavSetting from './NavSetting';

function Navbar() {

  let data = useSelector((e) => {
    return e.user
  })



  return (
    <>
      <div className='w-full h-full flex flex-col items-center justify-between pb-[15px]  border-r-[1px] border-[#ADB5BD]'>
        <div>
          <Link to={'/profile'}>
            <div className='w-[40px] h-[40px] rounded-[5px] border-2 border-green-500 bg-slate-700 mt-[10px] overflow-hidden'>
              {
                data.photoURL ?
                  <img src={data.photoURL} className='w-full h-full object-cover' />
                  :
                  <img src="User.png" className='w-full h-full object-cover' />
              }
            </div>
          </Link>
          <div>
            <NavBarList />
          </div>
        </div>
        <div className=' mb-[10px]'>
          <NavSetting />
        </div>
      </div>

    </>
  )
}

export default Navbar