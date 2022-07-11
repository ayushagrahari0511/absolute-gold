import styles from './Footer.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.footer}>
                    <div className={styles.list}>
                        <h4>INFORMATION</h4>
                        <ul className={styles.links}>
                            <Link href="/delivery">
                                Delivery Information
                            </Link>
                            <Link href="/discount">
                                Discount
                            </Link>
                            <Link href="/sitemap">
                                Sitemap
                            </Link>
                            <Link href="/privacy_policy">
                                Privacy Policy
                            </Link>
                            <Link href="/my_account">
                                My Account
                            </Link>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h4>MY ACCOUNT</h4>
                        <ul className={styles.links}>
                            <Link href="/login">
                                Sign In
                            </Link>
                            <Link href="/cart">
                                View Cart
                            </Link>
                            <Link href="/wishlist">
                                My Wishlist
                            </Link>
                            <Link href="/checkout">
                                Check out
                            </Link>
                            <Link href="/trackOrder">
                                Track My Order
                            </Link>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h4>HELP</h4>
                        <ul className={styles.links}>
                            <Link href="/faq">
                                F.A.Q.
                            </Link>
                            <Link href="/shipping">
                                Shipping
                            </Link>
                            <Link href="/sitemap">
                                Sitemap
                            </Link>
                            <Link href="/my_account">
                                My Account
                            </Link>
                            <Link href="/admin/dashboard">
                                Admin
                            </Link>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h4>CONTACT INFO</h4>
                        <ul className={`${styles.links} ${styles.right}`}>
                            <div>
                                <FontAwesomeIcon className={styles.icon} icon={faGlobe} />
                                <h5>
                                    1234 Your Address, Country.
                                </h5>
                            </div>
                            <div>
                                <FontAwesomeIcon className={styles.icon} icon={faPhoneAlt} />
                                <h5>+1 234 5678 9999</h5>
                            </div>
                            <div>
                                <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                                <h5>mail@domain.com</h5>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className={styles.copyright_wrapper}>
                    <h5>&#169; Copyright 2022. All Rights Reserved by Absolute Gold</h5>
                    <Image src="/payment_logo.webp" width={400} height={50} />
                </div>
            </div>
        </div>
    )
}

export default Footer