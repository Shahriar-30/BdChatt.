import { createSlice } from "@reduxjs/toolkit";

let friendSlice = createSlice({
   name: "msg",
   initialState: localStorage.getItem('msg')
      ? JSON.parse(localStorage.getItem('msg'))
      : {}, 
   reducers: {
    addFriend(state, action) {
         return { ...state, ...action.payload };
      },
   },
});

export { friendSlice };
export const { addFriend } = friendSlice.actions;
