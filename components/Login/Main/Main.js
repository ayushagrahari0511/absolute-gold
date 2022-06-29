import styles from './Main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faCog } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Main = () => {
    return (
        <div className={styles.wrapper}>
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
                            <FontAwesomeIcon icon={faSignInAlt} className={styles.loginIcon}/>
                            Login
                        </h2>
                        <form>
                            <div className={styles.input}>
                                <label htmlFor="userName">
                                    Username or email address *
                                </label>
                                <input type="text" required id='userName' name='userName' />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="password">
                                    Password *
                                </label>
                                <input type="password" required name="password" id="password" />
                            </div>
                            <div className={styles.remeberMe}>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" name="rememberMe" id="rememberMe" />
                                    <label htmlFor="rememberMe">Remember me</label>
                                </div>
                                <Link href="/forgetPass">
                                    <div className={styles.forgetPass}>
                                        <FontAwesomeIcon icon={faCog} />
                                        Lost your password?
                                    </div>
                                </Link>
                            </div>
                            <button className={styles.button}>
                                LOGIN
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