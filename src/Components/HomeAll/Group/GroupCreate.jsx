import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ref, onValue, set, push } from "firebase/database";
import { db } from '../../../../FireBase';
import { ToastContainer, toast } from 'react-toastify';

function GroupCreate(props) {


    let data = useSelector((e) => {
        return e.user
    })

    const [group, setGroup] = useState('');
    const [groupErr, setGroupErr] = useState('');
    
    



    let createGroup = () => {
        if (group == '') {
            setGroupErr("Fild Can't be null");
        } else {
            set(push(ref(db, 'group/')), {
                group: group,
                admin: data.displayName,
                adminId: data.uid,
                adminEmail: data.email
            }).then(() => {
                toast.success(`Group Created`);
                props.Toggle()
            })
        }
    }




    return (
        <>
            <ToastContainer className='absolute top-0'
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
            <div className=' absolute top-0 left-0 h-screen w-full bg-[#0000005e] flex items-center justify-center'>
                <div className='w-[500px] h-[350px] bg-white rounded-xl flex flex-col items-center justify-center'>
                    <div>
                        <h2 className='text-center font-extrabold text-[30px]'>Build Community</h2>
                        <div className='form_box'>
                            <p className='form_title bottom-[-5px] left-1 bg-transparent'>Enter Group Name</p>
                            <input type="text" placeholder='Enter Group Name' className='form_input'
                                onChange={(e) => {
                                    setGroup(e.target.value);
                                    setGroupErr("");
                                }} />
                        </div>
                        {groupErr && <p className='form_err text-left'>{groupErr}</p>}
                        <button onClick={createGroup} className='form_btn mb-[-20px]'>Create Group</button>
                        <button onClick={() => props.Toggle()} className='form_btn bg-red-500 hover:bg-red-600'>Cancle</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupCreate