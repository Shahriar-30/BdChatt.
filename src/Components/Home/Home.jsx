import React, { useEffect, useState } from 'react'
import HomeSearch from '../HomeAll/HomeSearch/HomeSearch';
import GroupHome from '../HomeAll/Group/GroupHome';
import PeopleHome from '../HomeAll/People/PeopleHome';
import FriendsHome from '../HomeAll/Friends/FriendsHome';
import RequestHome from '../HomeAll/Request/RequestHome';
import Navbar from '../Navbar/Navbar';
import { useSelector } from "react-redux";

function Home() {



  const data = useSelector((state) => {
    return state.user;
  })


  return (
    <>
      {
        // data.emailVerified ?
        <div className='flex h-screen'>
          <div className='w-[50px] h-screen relative  '>
            <Navbar />

          </div>
          <div className='h-screen w-full dark:bg-[black] overflow-y-scroll pt-1'>

            <div>
              <HomeSearch />
            </div>


            <div className=' w-full h-[90vh]  flex items-center justify-evenly  flex-wrap gap-3 p-1'>


              <div className='flex flex-col gap-3'>
                <RequestHome />
                <GroupHome />
              </div>

              <div className=''>
                <PeopleHome />
              </div>

              <div className='flex flex-col gap-3'>
                <GroupHome />
                <FriendsHome />
              </div>


            </div>



          </div>
        </div>
        // :
        // <VerifyEmail />
      }


    </>

  )
}

export default Home