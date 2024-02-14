import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";
import { friendSlice } from "./slices/FriendSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    friend: friendSlice.reducer // Use 'user' instead of 'users'
  },
});

export default store;
