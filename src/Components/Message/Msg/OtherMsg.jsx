import React, { useEffect, useState } from 'react'
import { MdImage } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { storage } from '../../../../FireBase';
import { ref, set, push } from "firebase/database";
import { db } from '../../../../FireBase';
import { ref as sref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AudioRecorder } from 'react-audio-voice-recorder';
import { useSelector } from 'react-redux';

function OtherMsg() {

    let data = useSelector((e) => {
        return e.user
    })
    let friendData = useSelector((e) => {
        return e.friend
    })

    const date = new Date();
    let title = Date.now();

    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        set(push(ref(db, 'Msg/')), {
            sender_msg: data.displayName,
            sender_id: data.uid,
            recever_msg: friendData.name,
            recever_id: friendData.id,
            audio: url,
            time: `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${(date.getDate()).toString().padStart(2, '0')}${(date.getHours()).toString().padStart(2, '0')}${(date.getMinutes()).toString().padStart(2, '0')}`
        })
    };

    let sendPhoto = (e) => {
        let item = (e.target.files[0]);
        const storageRef = sref(storage, `${title}`);

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, item).then((snapshot) => {
            getDownloadURL(storageRef).then((downloadURL) => {
                console.log('File available at', downloadURL);
                set(push(ref(db, 'Msg/')), {
                    sender_msg: data.displayName,
                    sender_id: data.uid,
                    recever_msg: friendData.name,
                    recever_id: friendData.id,
                    img: downloadURL,
                    time: `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${(date.getDate()).toString().padStart(2, '0')}${(date.getHours()).toString().padStart(2, '0')}${(date.getMinutes()).toString().padStart(2, '0')}`
                })

            });
        });
    }

    let sendAudio = () => {

    }


    return (
        <>
            <div className='w-[200px] h-[70px] select-none flex flex-col gap-1 absolute bottom-[85px] bg-white p-2'>
                <label htmlFor="img">
                    <div className=' cursor-pointer w-full border border-y-black p-1 flex transition-all duration-500 hover:bg-[#00000019] '>
                        <MdImage className='text-[20px]' />
                        <p className='font-bold'>Send a image</p>
                    </div>
                </label>
                <input type="file" id="img" className='hidden' onChange={(e) => sendPhoto(e)} />
                <label htmlFor="audio">
                    <div onClick={sendAudio} className=' cursor-pointer w-full  p-1 flex transition-all duration-500  '>
                        {/* <MdKeyboardVoice className='text-[20px]' /> */}
                        <div id='audio'>
                            <AudioRecorder
                                onRecordingComplete={addAudioElement}
                                audioTrackConstraints={{
                                    noiseSuppression: true,
                                    echoCancellation: true,
                                }}
                                downloadOnSavePress={false}
                                downloadFileExtension="webm"
                            />
                        </div>

                        {/* <p className='font-bold'>Send a voice</p> */}
                    </div>
                </label>


            </div>
        </>
    )
}

export default OtherMsg