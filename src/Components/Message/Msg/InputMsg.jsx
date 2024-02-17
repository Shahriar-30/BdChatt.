import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { BsEmojiSunglasses } from "react-icons/bs";
import { ref, set, push } from "firebase/database";
import { db } from '../../../../FireBase';
import { useSelector } from 'react-redux';
import { Discuss } from 'react-loader-spinner';
import EmojiPicker from 'emoji-picker-react';

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
    const [emojiModal, setEmojiModal] = useState(false)

    let sendMsg = () => {
        if (msg == '') {
            setEmpty(true);
        } else {
            setLoading(true);
            set(push(ref(db, 'Msg/')), {
                sender_msg: data.displayName,
                sender_id: data.uid,
                recever_msg: friendData.name,
                recever_id: friendData.id,
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
        }
    }

    let makeEmoji = (e) => {
        setMsg(prevMsg => prevMsg + e.emoji);
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

                    <abbr title="emoji">
                        <div className=' bg-[#fff]  pr-2 cursor-pointer' >
                            {emojiModal && <div className=' absolute right-[-420px] bottom-0' >
                                <EmojiPicker onEmojiClick={(e) => makeEmoji(e)} />
                            </div>}
                            <BsEmojiSunglasses className='text-[25px] text-yellow-800' onClick={() => setEmojiModal(!emojiModal)} />
                        </div>
                    </abbr>
                </div>
                <abbr title="send">
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
                </abbr>
            </div>
            {/* <p className='text-red-500 font-bold'>Input is Empty</p> */}

        </>
    )
}

export default InputMsg