import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { loginStart, loginSuccess, loginFail } from './store/authSlice'


const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch()
    const { user, isAuth } = useSelector(state => state.auth)

    const isFirstRun = useRef(user)

    useEffect(() => {

        async function fetchUser() {
            try {
                const { data } = await axios.get(`${process.env.BASEURL}/api/me`,
                    {
                        withCredentials: true
                    }
                )
                if (data) {
                    dispatch(loginSuccess(data.user))
                }
            }
            catch (err) {
                dispatch(loginFail())
            }
        }
        fetchUser();
    }, [isFirstRun]);


    return (
        <>
            {
                children
            }
        </>
    )
}

export default ProtectedRoute