import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./index";

export default configureStore({
    reducer:{
        login: loginSlice.reducer,
    }
})
