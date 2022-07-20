import { useState, forwardRef } from 'react'
import styles from '../Login/Main/Main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faCog } from '@fortawesome/free-solid-svg-icons'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import Link from 'next/link'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { registerStart, registerSuccess, registerFail } from '../../store/registerSlice'
import {useRouter} from 'next/router'

const Main = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { isFetching, message } = useSelector(state => state.register)
    const [open, setOpen] = useState(false)

    // State for user Input----------------
    // --------------------------
    const [values, setValues] = useState({
        userName: "",
        phone: undefined,
        email: "",
        password: "",
        confirmPassword: "",
    })

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    // State for form errors-----------------------------
    // ---------------------
    const [formErrors, setFormErrors] = useState({
        userName: undefined,
        password: undefined,
        confirmPassword: undefined
    })

    // Storing form data to the states -----------------
    // --------------------------
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        validate(e)
    }

    // Submiting form--------------------
    // -------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { userName, password, confirmPassword } = formErrors
        if (!confirmPassword && !password && !userName) {
            try {
                dispatch(registerStart())
                const config = {
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                const { data } = await axios.post(`${process.env.BASEURL}/api/register`,
                    {
                        ...values
                    },
                    config
                )

                dispatch(registerSuccess())
                setOpen(true)
                router.push('/login')
            }
            catch (error) {
                const { response } = error;
                setOpen(true)
                dispatch(registerFail(response.data?.message))
            }
        }
    };

    // Validating form inputs--------------------
    // -------------------------------
    const validate = (e) => {

        // Validating Password----------------------
        // -------------------------------
        if (e.target.name === "password") {
            const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/

            if (!passRegex.test(e.target.value)) {
                setFormErrors({ ...formErrors, [e.target.name]: "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character." })
            }
            else {
                setFormErrors({ ...formErrors, [e.target.name]: undefined })
            }
        }

        // Validating Username----------------------
        // -------------------------------
        if (e.target.name === "userName") {
            const userRegex = /^[a-zA-Z0-9@#$%^&*(!)_-]{5,30}$/
            if (!userRegex.test(e.target.value)) {
                setFormErrors({ ...formErrors, [e.target.name]: "Username should be 5-30 characters long." })
            }
            else {
                setFormErrors({ ...formErrors, [e.target.name]: undefined })
            }
        }

        // Validating confirmPassword----------------------
        // -------------------------------
        if (e.target.name === "confirmPassword") {
            if (values.password === e.target.value) {
                setFormErrors({ ...formErrors, [e.target.name]: undefined })
            }
            else {
                setFormErrors({ ...formErrors, [e.target.name]: "Password don't match" })
            }
        }
    }
    return (
        <div className={styles.wrapper}>
            <Snackbar
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}>
                <h5 className={styles.favoratesnackbarAdded}>
                    {message}
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
                            Register
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.input}>
                                <label htmlFor="userName">
                                    Username *
                                </label>
                                <input
                                    type="text"
                                    required id='userName'
                                    value={values.userName}
                                    onChange={onChange}
                                    name='userName' />
                                {
                                    formErrors.userName &&
                                    <span>{formErrors.userName}</span>
                                }
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="phone">
                                    Mobile No *
                                </label>
                                <input
                                    type="number"
                                    value={values.phone}
                                    required id='phone'
                                    onChange={onChange}
                                    name='phone' />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="email">
                                    Email address *
                                </label>
                                <input
                                    type="email"
                                    required id='email'
                                    onChange={onChange}
                                    value={values.email}
                                    name='email' />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="password">
                                    Password *
                                </label>
                                <input
                                    type="password"
                                    required name="password"
                                    value={values.password}
                                    onChange={onChange}
                                    id="password" />
                                {
                                    formErrors.password &&
                                    <span>{formErrors.password}</span>
                                }
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="cPassword">
                                    Confirm Password *
                                </label>
                                <input type="password"
                                    required name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={onChange}
                                    id="cPassword" />
                                {
                                    formErrors.confirmPassword &&
                                    <span>{formErrors.confirmPassword}</span>
                                }
                            </div>
                            <div className={styles.remeberMe}>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" required name="terms&conditions" id="terms&conditions" />
                                    <label htmlFor="terms&conditions">I accept the Terms and Conditions</label>
                                </div>
                            </div>
                            <button className={styles.button} onSubmit={handleSubmit}>
                                {isFetching ?
                                    <div className={styles.loader}></div>
                                    :
                                    "REGISTER"
                                }
                            </button>
                        </form>
                    </div>
                    <div className={styles.right}>
                        <h2>Login</h2>
                        <h5>
                            Registering for this site allows you to access your order
                            status and history. Just fill in the fields below, and we’ll
                            get a new account set up for you in no time. We will only ask you for
                            information necessary to make the purchase process faster and easier.
                        </h5>
                        <Link href="/login">
                            LOGIN
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