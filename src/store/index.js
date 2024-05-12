import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "@/store/modules/userInfoStore";

const store = configureStore({
    reducer: {
        userInfo: userInfoReducer
    }
})

export default store