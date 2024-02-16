import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { BsEmojiSunglasses } from "react-icons/bs";
import { ref, set, push } from "firebase/database";
import { db } from '../../../../FireBase';
import { useSelector } from 'react-redux';
import { Discuss } from 'react-loader-spinner';

function InputMsg() {

    let data = useSelector((e) => {
        return e.user
    })
    let friendData = useSelector((e) => {
        return e.friend
    })


    const [msg, setMsg] = useState('');
    const [empty, setEmpty] = useState(false);
    const [loading, setLoading] = useState(false);

    let sendMsg = () => {
        if (msg == '') {
            setEmpty(true);
        } else {
            if (data.uid == friendData.senderId) {
                setLoading(true);
                set(push(ref(db, 'Msg/')), {
                    sender_msg: data.displayName,
                    sender_id: data.uid,
                    recever_msg: friendData.recever,
                    recever_id: friendData.receverId,
                    msg,
                }).then(() => {
                    setMsg("")
                })
                    .catch((e) => {
                        console.log(e);
                        alert("something went wrong! contact to developer");
                    })
                    .finally(() => {
                        setLoading(false)
                    })
            } else if (data.uid == friendData.receverId) {
                setLoading(true);
                set(push(ref(db, 'Msg/')), {
                    sender_msg: data.displayName,
                    sender_id: data.uid,
                    recever_msg: friendData.sender,
                    recever_id: friendData.senderId,
                    msg,
                }).then(() => {
                    setMsg("")
                })
                    .catch((e) => {
                        console.log(e);
                        alert("something went wrong! contact to developer");
                    })
                    .finally(() => {
                        setLoading(false)
                    })
            } else {
                alert("somthing went wrong! contact to developer.")
            }
        }

    }

    return (
        <>
            <div className='w-full h-full flex items-center p-2'>
                <div className='w-[40px]'>
                </div>
                <div className={`w-full relative flex rounded-sm items-center border-black border ${empty && 'border-red-500'}`} >
                    <input value={msg} placeholder='Write Something...' type="text" className='rounded-md indent-2 p-3 font-bold w-full outline-none'
                        onChange={(e) => {
                            setMsg(e.target.value);
                            setEmpty(false);
                        }} />

                    <div className=' bg-[#fff] pr-2 cursor-pointer'>
                        <BsEmojiSunglasses className='text-[25px] text-yellow-800' />
                    </div>
                </div>
                <button onClick={sendMsg} className=' w-[50px] ml-2  h-[40px] rounded-sm flex items-center justify-center'>
                    {
                        !loading ?

                            <IoIosSend className='text-[35px] text-prime' />
                            :
                            <Discuss
                                visible={true}
                                height="40"
                                width="40"
                                ariaLabel="discuss-loading"
                                wrapperStyle={{}}
                                wrapperClass="discuss-wrapper"
                                color="#fff"
                                backgroundColor="#F4442E"
                            />
                    }
                </button>
            </div>
            {/* <p className='text-red-500 font-bold'>Input is Empty</p> */}

        </>
    )
}

export default InputMsg