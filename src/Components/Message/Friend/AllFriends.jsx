import React, { useEffect, useState } from 'react'
import { ref, onValue, set, push } from "firebase/database";
import { useDispatch } from 'react-redux';
import { addFriend } from '../../../Store/slices/FriendSlice';
import { db } from '../../../../FireBase';
import { useSelector } from 'react-redux';

function AllFriends() {

    let dispatch = useDispatch();
    let data = useSelector((e) => {
        return e.user
    })

    const [friendsData, setFriendsData] = useState([])



    let makeSelect = (e) => {
        if (data.uid == e.senderId) {
            localStorage.setItem("msg", JSON.stringify({
                name: e.recever,
                id: e.receverId,
                email: e.receverEmail
            }))
            dispatch(addFriend(
                {
                    name: e.recever,
                    id: e.receverId,
                    email: e.receverEmail
                }
            ))
        } else if (data.uid == e.receverId) {
            localStorage.setItem("msg", JSON.stringify({
                name: e.sender,
                id: e.senderId,
                email: e.senderEmail
            }))
            dispatch(addFriend(
                {
                    name: e.sender,
                    id: e.senderId,
                    email: e.senderEmail
                }
            ))
        }
    }


    useEffect(() => {
        const starCountRef = ref(db, 'friend/');
        onValue(starCountRef, (snapshot) => {
            let Data = [];
            snapshot.forEach((e) => {
                if (e.val().receverId == data.uid || e.val().senderId == data.uid) {
                    Data.push({ ...e.val(), id: e.key })
                }
            });
            setFriendsData(Data);
        })
    }, [])


    return (
        <>
            <div>
                {
                    friendsData.map((e) => (
                        <div className='p-2' key={e.id} onClick={() => makeSelect(e)}>
                            <div className='  people_one p-4 w-full justify-normal transition-all duration-500   hover:bg-[rgba(73,80,87,0.18)] '>
                                <img src="simon.png" className=' w-[40px] h-[40px] rounded-full' />
                                <div>
                                    <h3 className=' font-bold text-[17px]  dark:text-[#eee]'>{e.receverId == data.uid ? e.sender : e.recever}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default AllFriends