import { useState, forwardRef } from 'react'
import styles from './Main.module.css'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faCog } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { loginStart, loginSuccess, loginFail } from '../../../store/authSlice'
import { useRouter } from 'next/router'

const Main = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const { isAuth, user, isFetching } = useSelector(state => state.auth)

    // State for user Input----------------
    // --------------------------
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    // Storing form data to the states -----------------
    // --------------------------
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    // Submiting form--------------------
    // -------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(loginStart())
            const { data } = await axios.post(`${process.env.BASEURL}/api/login`,
                {
                    ...values,
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                    credentials: 'include'
                }
            )
            setOpen(true)
            if (data) {
                dispatch(loginSuccess(data.user))
                if (router.query.returnUrl) {
                    router.push({
                        pathname: router.query.returnUrl
                    })
                }
                else {
                    router.push("/home")
                }
            }
        }
        catch (error) {
            setOpen(true)
            dispatch(loginFail())
        }
    };


    return (
        <div className={styles.wrapper}>
            <Snackbar
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}>
                <h5 className={styles.favoratesnackbarAdded}>
                    {
                        isAuth ? "Login Success" : "Invalid Credentials"
                    }
                </h5>
            </Snackbar>

            <div className={styles.container}>
                <div className={styles.navigation}>
                    <Link href={`/home`}>Home</Link>
                    /
                    <p>
                        Login & Register
                    </p>
                </div>
                <div className={styles.body}>
                    <div className={styles.left}>
                        <h2>
                            <FontAwesomeIcon icon={faSignInAlt} className={styles.loginIcon} />
                            Login
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.input}>
                                <label htmlFor="userName">
                                    Username or email address *
                                </label>
                                <input type="text"
                                    required id='userName'
                                    name='email'
                                    onChange={onChange}
                                    value={values.email} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="password">
                                    Password *
                                </label>
                                <input type="password"
                                    required name="password"
                                    onChange={onChange}
                                    value={values.password}
                                    id="password" />
                            </div>
                            <div className={styles.remeberMe}>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" name="rememberMe" id="rememberMe" />
                                    <label htmlFor="rememberMe">Remember me</label>
                                </div>
                                <Link href="/forgetPass">
                                    <div className={styles.forgetPass}>
                                        <FontAwesomeIcon icon={faCog} className={styles.faCog} />
                                        Lost your password?
                                    </div>
                                </Link>
                            </div>
                            <button className={styles.button} onSubmit={handleSubmit}>
                                {isFetching ?
                                    <div className={styles.loader}></div>
                                    :
                                    "LOGIN"
                                }
                            </button>

                        </form>
                    </div>
                    <div className={styles.right}>
                        <h2>Register</h2>
                        <h5>
                            Registering for this site allows you to
                            access your order status and history.
                            Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information
                            necessary to make the purchase process faster and easier.
                        </h5>
                        <Link href="/register">
                            REGISTER
                        </Link>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Main