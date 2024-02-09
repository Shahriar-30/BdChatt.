import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { ref, onValue, set } from "firebase/database";
import { db } from '../../../../FireBase';


function HomeSearch() {
    let data = useSelector((e) => {
        return e.user
    })

    const [search, setSearch] = useState('');
    const [info, setInfo] = useState([]);
    const [userList, setuserList] = useState([]);
    const [searchPop, setsearchPop] = useState(false);

    useEffect(() => {

        const starCountRef = ref(db, 'users/');
        onValue(starCountRef, (snapshot) => {
            // const data = snapshot.val()
            let Data = [];
            snapshot.forEach((e) => {
                if (data.uid !== e.key) {
                    Data.push({ ...e.val(), id: e.key })
                }
            });
            setInfo(Data);
        })

    }, [])

    let makeSearch = (e) => {
        setSearch(e.target.value);
        let data = info.filter((item) => item.displayName.toLowerCase().includes(e.target.value.toLowerCase()))
        setuserList(data)
    }

    useEffect(()=> {
        if (userList.length == 0) {
            setsearchPop(false);
        }else{
            setsearchPop(true)
        }
        if (search == '') {
            setsearchPop(false);
        }
    }, [userList, search])

    return (
        <>
            <div className='flex flex-col gap-1 items-end relative'>
                <div className='form_box max-w-[250px]  mx-auto  md:mr-4 md:float-right'>
                    <IoSearchSharp className='absolute text-[25px] font-bold top-[10px] cursor-pointer right-[10px] ' />
                    <input type="text" placeholder='Search' className='form_input py-1' value={search}
                        onChange={(e) => makeSearch(e)} />
                </div>
                {searchPop && <div className='bg-white h-[300px] w-[350px] absolute top-[50px] rounded-xl p-4'>
                    <p className='font-bold text-lg'>People</p>
                  
                    { 
                        userList.map((e) => (
                            <div className='people dark:bg-[#495057]' key={userList.id} >
                                <div className='  people_one  dark:bg-[#495057] '>
                                    <img src="simon.png" className=' w-[40px] h-[40px] rounded-full' />
                                    <div>
                                        <h3 className=' font-bold text-[17px]  dark:text-[#eee]'>{e.displayName}</h3>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center '>
                                    <abbr title="Message">
                                        <div className='] cursor-pointer font-extrabold text-[20px] text-red-500 transition-all duration-600 dark:hover:bg-[rgba(255,254,254,0.11)] hover:bg-[rgba(0,0,0,0.19)] p-[6px] rounded-md  dark:text-[#eee]'>
                                            m
                                        </div>
                                    </abbr>
                                </div>
                            </div>
                        ))
                    }

                </div>}
            </div>
        </>
    )
}

export default HomeSearch