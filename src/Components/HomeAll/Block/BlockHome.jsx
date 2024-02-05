import React, { useState, useEffect } from 'react'
import { MdAdd } from "react-icons/md";
import { db } from '../../../../FireBase';
import { ref, onValue, set, push, remove } from "firebase/database"
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

function BlockHome() {

    let data = useSelector((e) => {
        return e.user
    })

    const [blockedAll, setBlockedAll] = useState([]);


    useEffect(() => {

        const starCountRef = ref(db, 'block/');
        onValue(starCountRef, (snapshot) => {
            let Data = [];
            snapshot.forEach((e) => {
                if (data.uid == e.val().blockId || data.uid == e.val().BlockerId) {
                    Data.push({ ...e.val(), id: e.key })
                }
            });
            setBlockedAll(Data);
        })

    }, [])


    let deleteFriend = (e) => {
        console.log(e);
        remove(ref(db, 'block/' + e.id)).then(() => {
            toast.error(`Unfriend Complete`);
        })
    }

    let makeFriend = (e) => {
            set(push(ref(db, 'friend/')), {
                sender: data.displayName,
                senderId: data.uid,
                senderEmail: data.email,
                // =====
                recever: e.block,
                receverId: e.blockId,
                receverEmail: e.blockEmail,
            }).then(() => {
                remove(ref(db, 'block/' + e.id)).then(() => {
                    toast.success(`Made Friend`);
                })
            })
        
    }

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
            {
                blockedAll.map((e) => (
                    < div className='people dark:bg-[#495057]' key={e.id}>
                        <div className='  people_one  dark:bg-[#495057] '>
                            <img src="simon.png" className=' w-[40px] h-[40px] rounded-full' />
                            <div>
                                <h3 className=' font-bold text-[17px]  dark:text-[#eee]'>{e.BlockerId == data.uid ? e.block : e.Blocker}</h3>
                            </div>
                        </div>
                        <div className='flex items-center justify-center '>
                            <abbr title="Unfriend">
                                <div onClick={() => deleteFriend(e)} className=' select-none cursor-pointer font-extrabold text-[20px] text-red-500 transition-all duration-600 dark:hover:bg-[rgba(255,254,254,0.11)] hover:bg-[rgba(0,0,0,0.19)] p-[6px] rounded-md  dark:text-[#eee]'>
                                    X
                                </div>
                            </abbr>
                            {
                                e.BlockerId == data.uid ?
                                    <abbr title="Make Frined">
                                        <div onClick={() => makeFriend(e)} className='] cursor-pointer font-extrabold text-[25px] transition-all duration-600 dark:hover:bg-[rgba(255,254,254,0.11)] hover:bg-[rgba(0,0,0,0.19)] p-[6px] rounded-md  dark:text-[#eee]'>
                                            <MdAdd />
                                        </div>
                                    </abbr>
                                    :
                                    <div></div>
                            }
                        </div>
                    </div >
                ))

            }
        </>
    )
}

export default BlockHome