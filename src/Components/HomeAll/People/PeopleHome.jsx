import React, { useEffect, useState } from 'react'
import { MdAdd } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { db } from '../../../../FireBase';
import { ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

function PeopleHome() {

    let data = useSelector((e) => {
        return e.user
    })
    const [allFriend, setAllFriend] = useState([]);

    const [makeUser, setMakeUser] = useState('');

    const [info, setInfo] = useState([])

    useEffect(() => {
        const starCountRef = ref(db, 'request/');
        onValue(starCountRef, (snapshot) => {
            snapshot.forEach((e) => {
                setMakeUser(e.val().senderId + e.val().receverId);
            });
        })
    }, [])

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



    useEffect(() => {

        const starCountRef = ref(db, 'friend/');
        onValue(starCountRef, (snapshot) => {
            let Data = [];
            snapshot.forEach((e) => {
                if (data.uid == e.val().receverId) {
                    Data.push({ ...e.val(), id: e.key })
                }
            });
            setAllFriend(Data);
        })

    }, [])


    const sendRequest = (e) => {
        const requestRef = ref(db, 'request/');

        const newRequest = {
            sender: data.displayName,
            senderId: data.uid,
            senderEmail: data.email,
            // =====
            recever: e.displayName,
            receverId: e.id,
            receverEmail: e.email,
        };

        push(requestRef, newRequest)
            .then(() => {
                console.log('Request sent successfully!');
                toast.success(`Friend Request Send`);
            })
            .catch((error) => {
                alert("There is an Error");
            });

    };

    // console.log(makeUser);
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce
            />
            <div className='w-full  min-w-[300px] max-w-[320px] bg-[#fff]  rounded-md p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] dark:bg-[#212529]'>
                <div className=' w-full flex gap-1 items-center p-1 pl-2  border-b-[3px] border-[#eee]  '>
                    <IoIosPeople className='font-bold text-[28px] text-prime ' />
                    <h2 className='font-bold text-[20px] select-none   dark:text-[#eee]'>People</h2>
                </div>


                <div className='h-[350px] overflow-y-scroll'>

                    {
                        info.map((e) => (
                            <div className='people dark:bg-[#495057]' key={e.id}>
                                {/* {console.log(e)} */}
                                <div className='  people_one dark:bg-[#495057]'>
                                    <img src="simon.png" className=' w-[40px] h-[40px] rounded-full' />
                                    <div>
                                        <h3 className=' font-bold text-[17px] h-[40px]  dark:text-[#eee] '>{e.displayName}</h3>
                                    </div>
                                </div>
                                {
                                    makeUser.includes(data.uid + e.id) || makeUser.includes(e.id + data.uid) ?
                                        <div className='cursor-pointer font-extrabold text-[25px] transition-all duration-600 dark:hover:bg-[rgba(255,254,254,0.11)] hover:bg-[rgba(0,0,0,0.19)] p-[6px] rounded-md dark:text-[#eee]'>
                                            -
                                        </div>
                                        :
                                        <abbr title="Add Friend">
                                            <div onClick={() => sendRequest(e)} className=' cursor-pointer font-extrabold text-[25px] transition-all duration-600 dark:hover:bg-[rgba(255,254,254,0.11)] hover:bg-[rgba(0,0,0,0.19)] p-[6px] rounded-md dark:text-[#eee]'>
                                                <MdAdd />
                                            </div>
                                        </abbr>
                                }
                            </div>
                        ))
                    }




                </div>

            </div>
        </>
    )
}

export default PeopleHome