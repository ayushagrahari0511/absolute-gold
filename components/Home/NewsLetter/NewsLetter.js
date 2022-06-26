import styles from './NewsLetter.module.css'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa'
import Link from 'next/link'

const NewsLetter = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.newsLetter}>
                    <h3>
                        NewsLetter
                    </h3>
                    <h5>Sign up for our mailing list to get latest updates and offers.</h5>
                    <form className={styles.email}>
                        <input
                            type="email"
                            placeholder='Email Address'
                            name="email"
                            required />
                        <button>Send Newsletters</button>
                    </form>
                </div>
                <div className={styles.privacy}>
                    <h3>
                        We respect your privacy
                    </h3>
                    <div className={styles.social_icons}>
                        <Link href="/social">
                            <div className={styles.list}>
                                <FaFacebookF className={styles.icon} />
                            </div>
                        </Link>
                        <Link href="/social">
                            <div className={styles.list}>
                                <FaTwitter className={styles.icon} />
                            </div>
                        </Link>
                        <Link href="/social">
                            <div className={styles.list}>
                                <FaYoutube className={styles.icon} />
                            </div>
                        </Link>
                        <Link href="/social">
                            <div className={styles.list}>
                                <FaInstagram className={styles.icon} />
                            </div>
                        </Link>
                        <Link href="/social">
                            <div className={styles.list}>
                                <FaPinterest className={styles.icon} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.para}>
                <h6>
                    We're confident we've provided all the best for you. Stay connect with us
                </h6>
            </div>
        </div>
    )
}

export default NewsLetter