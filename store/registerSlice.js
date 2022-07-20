import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: "register",
    initialState: {
        isFetching: false,
        message: "",
        error: false
    },
    reducers: {
        registerStart: (state) => {
            state.isFetching = true;
            state.message = ""
            state.error = false
        },
        registerSuccess: (state) => {
            state.isFetching = false;
            state.message = "Registered Successfully";
            state.error = false;
        },
        registerFail: (state, action) => {
            state.isFetching = false;
            state.message = action.payload;
            state.error = true;
        }
    }
})

export const {registerStart, registerSuccess, registerFail} = registerSlice.actions

export default registerSlice.reducer