import React, { useEffect, useState } from 'react'
import { MdAdd } from "react-icons/md";
import { GiBlackFlag } from "react-icons/gi";
import { ref, onValue, set } from "firebase/database";
import { db } from '../../../../FireBase';
import GroupCreate from './GroupCreate';
import { useSelector } from 'react-redux';


function GroupHome() {
    let data = useSelector((e) => {
        return e.user
    })

    const [toggle, setToggle] = useState(false);
    const [groupData, setGroupData] = useState([]);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const starCountRef = ref(db, 'group/');
        onValue(starCountRef, (snapshot) => {
            let Data = [];
            snapshot.forEach((e) => {
                if (data.uid == e.val().adminId) {
                    setAdmin(true)
                }
                Data.push({ ...e.val(), id: e.key })
            });
            setGroupData(Data);
        });
    }, []);






    return (
        <>
            {toggle && <GroupCreate Toggle={setToggle} />}
            <div className='w-full  min-w-[300px] max-w-[320px] bg-[#fff]  rounded-md p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] '>
                <div className='flex items-center mr-1'>
                    <div className=' w-full flex gap-1 items-center p-1 pl-2  border-b-[3px] border-[#eee]  '>
                        <GiBlackFlag className='font-bold text-[28px] text-prime ' />
                        <h2 className='font-bold text-[20px] select-none  '>Group</h2>
                    </div>
                    <abbr title="Create Group"></abbr>
                    <div onClick={() => setToggle(!toggle)} className='cursor-pointer font-extrabold text-[25px] transition-all duration-600  hover:bg-[rgba(0,0,0,0.19)] p-[6px] rounded-md'>
                        <MdAdd />
                    </div>
                </div>


                <div className='h-[200px] overflow-y-scroll'>

                    {
                        groupData.map((e) => (
                            <div className='people ' key={e.id}>
                                <div className='  people_one '>
                                    <img src="simon.png" className=' w-[40px] h-[40px] rounded-full' />
                                    <div>
                                        <h3 className=' font-bold text-[17px]  '>{e.group}</h3>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='  cursor-pointer font-extrabold text-[25px] transition-all duration-600  hover:bg-[rgba(0,0,0,0.19)] p-[6px] rounded-md'>
                                        <MdAdd />
                                    </div>
                                    {admin && <div className='  font-extrabold text-[25px] text-red-500 transition-all duration-600  hover:bg-[rgba(0,0,0,0.19)] p-[6px] rounded-md'>
                                        <p>A</p>
                                    </div>}
                                </div>
                            </div>
                        ))
                    }




                </div>

            </div>
        </>
    )
}

export default GroupHome