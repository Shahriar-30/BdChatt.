import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer, // Use 'user' instead of 'users'
  },
});

export default store;
