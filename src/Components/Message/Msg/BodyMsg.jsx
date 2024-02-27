import React, { useEffect, useState } from 'react'
import { ref, onValue, set, push } from "firebase/database";
import moment from 'moment';
import { useSelector } from 'react-redux';
import { db } from '../../../../FireBase';

function BodyMsg() {

  let data = useSelector((e) => {
    return e.user
  })
  let friendData = useSelector((e) => {
    return e.friend
  })



  const [allMsg, setAllMsg] = useState([])

  useEffect(() => {
    const starCountRef = ref(db, 'Msg/');
    onValue(starCountRef, (snapshot) => {
      let Data = [];
      snapshot.forEach((e) => {
        if (e.val().recever_id == friendData.id) {
          Data.push({ ...e.val(), id: e.key })
        } else if (e.val().sender_id == friendData.id) {
          Data.push({ ...e.val(), id: e.key })
        }
      });
      setAllMsg(Data);
    })
  }, [friendData.id])


  return (
    <>
      {
        allMsg.map((e) => (

          <div key={e.id}>
            {
              data.uid == e.sender_id && e.msg &&
              <div className='flex flex-col items-end  gap-2 w-full mt-2'>
                <div className='bg-prime text-white max-w-[70%] p-3 rounded-xl'>{e.msg}</div>
                <p className='mt-[-8px] font-bold text-[14px] text-[#818181b1] '>
                  {moment(e.time, "YYYYMMDDh:mm").fromNow()}
                </p>
              </div>
            }
            {
              data.uid == e.sender_id && e.img &&
              <div className='flex flex-col items-end  gap-2 w-full mt-2'>
                <div className=' text-white max-w-[70%] p-3 rounded-xl'>
                  <img src={e.img} />
                </div>
                <p className='mt-[-8px] font-bold text-[14px] text-[#818181b1] '>
                  {moment(e.time, "YYYYMMDDh:mm").fromNow()}
                </p>
              </div>
            }
            {
              data.uid == e.sender_id && e.audio &&
              <div className='flex flex-col items-end  gap-2 w-full mt-2'>
                <div className=' text-white max-w-[70%] p-3 rounded-xl addo'  id=''>
                  <audio src={e.audio} controls></audio>
                </div>
                <p className='mt-[-8px] font-bold text-[14px] text-[#818181b1] '>
                  {moment(e.time, "YYYYMMDDh:mm").fromNow()}
                </p>
              </div>
            }

            {
              data.uid == e.recever_id && e.msg &&
              <div className='flex flex-col items-start  gap-2 w-full mt-2'>
                <div className='bg-[#777676] text-white w-fit max-w-[70%] p-3 rounded-xl'>{e.msg}</div>
                <p className='mt-[-8px] font-bold text-[14px] text-[#818181b1] '>
                  {moment(e.time, "YYYYMMDDh:mm").fromNow()}
                </p>
              </div>
            }
            {
              data.uid == e.recever_id && e.img &&
              <div className='flex flex-col items-start  gap-2 w-full mt-2'>
                <div className=' text-white w-fit max-w-[70%] p-3 rounded-xl'>
                  <img src={e.img} />
                </div>
                <p className='mt-[-8px] font-bold text-[14px] text-[#818181b1] '>
                  {moment(e.time, "YYYYMMDDh:mm").fromNow()}
                </p>
              </div>
            }
            {
              data.uid == e.recever_id && e.audio &&
              <div className='flex flex-col items-start  gap-2 w-full mt-2'>
                <div className=' text-white w-fit max-w-[70%] p-3 rounded-xl addo' id=''>
                <audio src={e.audio} controls></audio>
                </div>
                <p className='mt-[-8px] font-bold text-[14px] text-[#818181b1] '>
                  {moment(e.time, "YYYYMMDDh:mm").fromNow()}
                </p>
              </div>
            }

          </div>

        ))
      }


    </>
  )
}

export default BodyMsg