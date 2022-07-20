import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        user: null,
        isFetching: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
            state.isAuth = false;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
            state.isAuth = true;
        },
        loginFail: (state) => {
            state.isFetching = false;
            state.user = null;
            state.isAuth = false
        }
    }
})

export const { loginStart, loginSuccess, loginFail } = authSlice.actions;

export default authSlice.reducer