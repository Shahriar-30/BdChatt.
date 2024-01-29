import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
   name: "data",
   initialState: localStorage.getItem('data')
      ? JSON.parse(localStorage.getItem('data'))
      : {}, 
   reducers: {
    addUser(state, action) {
         return { ...state, ...action.payload };
      },
   },
});

export { userSlice };
export const { addUser } = userSlice.actions;
