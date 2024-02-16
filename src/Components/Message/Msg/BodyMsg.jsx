import React, { useEffect, useState } from 'react'
import { ref, onValue, set, push } from "firebase/database";
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
        if (e.val().recever_id == friendData.id  ) {
          Data.push({ ...e.val(), id: e.key })
        } else if (e.val().sender_id == friendData.id ) {
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
              data.uid == e.sender_id &&
              <div className='flex flex-col items-end  gap-2 w-full mt-2'>
                <div className='bg-prime text-white max-w-[70%] p-3 rounded-xl'>{e.msg}</div>
              </div>
            }
            {
              data.uid == e.recever_id &&
              <div className='flex flex-col items-start  gap-2 w-full mt-2'>
                <div className='bg-[#777676] text-white w-fit max-w-[70%] p-3 rounded-xl'>{e.msg}</div>
              </div>

            }
          </div>

        ))
      }


    </>
  )
}

export default BodyMsg