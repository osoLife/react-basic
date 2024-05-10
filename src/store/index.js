import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "@/store/modules/userInfoStore";

const store = configureStore({
    reducer: userInfoReducer
})

export default store