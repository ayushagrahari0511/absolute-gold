import { useState } from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FaRegUser, FaUserAlt, FaTimes, FaCog, FaHeart } from 'react-icons/fa'
import { RiShoppingBag3Fill, RiLogoutCircleLine } from 'react-icons/ri'
import { IoBag } from 'react-icons/io5'
import { CgDollar } from 'react-icons/cg'
import axios from 'axios'
import { useRouter } from 'next/router'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoCart } from 'react-icons/io5'
import Link from 'next/link'
import { data } from '../../components/Home/Categories/data'
import { useSelector } from 'react-redux'

const cart = "03"

const Header = ({ desc, img, title }) => {
    const router = useRouter()
    const { user } = useSelector(state => state.auth)
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleSearch, setToggleSearch] = useState(false)

    // Logout user-------------------
    // -------------------------
    const handleLogout = async () => {
        const config = {
            WithCredentials: true,
            Credentials: 'include'
        };
        const { data } = await axios.get(`${process.env.BASEURL}/api/logout`, {
            withCredentials: true,
            credentials: 'include'
        })

        // if (data) {
        //     router.reload()
        // }
    }

    return (
        <div className={`registerHeader ${styles.wrapper}`}
            style={{
                background: `url(${img})`,
            }}
        >
            <div className={styles.container}>
                <div className={styles.searchInput}>
                    <form
                        onClick={() => setToggleSearch(true)}
                        className={styles.search_container}>
                        <label htmlFor="search">
                            <FontAwesomeIcon icon={faSearch} className={styles.search} />
                        </label>
                        <input type="text" id='search' placeholder='Search topics or keyword' />
                        <div className={styles.microphone}>
                            <FontAwesomeIcon icon={faMicrophone} className={styles.mike} />
                        </div>
                    </form>
                    <div className={styles.login}>
                        {
                            user ? <div className={styles.left_icon}>
                                <FaCog className={styles.cog} />
                                <span></span>
                                <Link href="/cart">
                                    <div className={cart ? `${styles.cart} ${styles.active}` : styles.cart} >
                                        <IoCart />
                                        {
                                            cart && <span>{cart}</span>
                                        }
                                    </div>
                                </Link>
                                <div className={styles.user_setting}>
                                    <Link href="/my_account">
                                        <h4>
                                            <FaUserAlt className={styles.user_setting_icon} />
                                            MY ACCOUNT
                                        </h4>
                                    </Link>
                                    <Link href="/cart">
                                        <h4>
                                            <IoCart className={styles.user_setting_icon} />
                                            MY CART
                                        </h4>
                                    </Link>
                                    <Link href="/wishlist">
                                        <h4>
                                            <FaHeart className={styles.user_setting_icon} />
                                            MY WISHLIST
                                        </h4>
                                    </Link>
                                    <Link href="/checkout">
                                        <h4>
                                            <CgDollar className={styles.user_setting_icon} />
                                            CHECK OUT
                                        </h4>
                                    </Link>
                                    <Link href="/orders">
                                        <h4>
                                            <RiShoppingBag3Fill className={styles.user_setting_icon} />
                                            ORDER COMPLETE
                                        </h4>
                                    </Link>
                                    <div onClick={handleLogout}>
                                        <h4>
                                            <RiLogoutCircleLine className={styles.user_setting_icon} />
                                            LOGOUT
                                        </h4>
                                    </div>

                                </div>
                            </div>
                                :
                                <Link href="/login">
                                    <span>
                                        <FaRegUser />
                                        <h5>
                                            LOGIN
                                        </h5>
                                    </span>
                                </Link>
                        }
                        <div className={styles.menu} onClick={() => setToggleMenu(true)}>
                            <AiOutlineMenu />
                        </div>
                    </div>

                </div>
                {
                    title ?
                        <div className={styles.my_account}>
                            <div className={styles.title}>
                                <h1>
                                    {title}
                                </h1>
                            </div>
                            <p>{desc}</p>
                        </div>
                        :
                        <div className={styles.my_account}>
                            <div className={styles.title}>
                                <i className="fa fa-user-cog" />
                                <h1>
                                    MY ACCOUNT
                                </h1>
                            </div>
                        </div>
                }
            </div>
            <form
                onClick={() => setToggleSearch(true)}
                className={toggleSearch ? `${styles.dragSearch} ${styles.active}` : styles.dragSearch}>
                <label htmlFor="search">
                    <FontAwesomeIcon icon={faSearch} className={styles.search} />
                </label>
                <input type="text" id='search' placeholder='Search topics or keyword' />
                <div className={styles.microphone}>
                    <FontAwesomeIcon icon={faMicrophone} className={styles.mike} />
                </div>
            </form>
            <div
                onClick={() => setToggleSearch(false)}
                className={toggleSearch ? `${styles.toggleSearch} ${styles.active}` : styles.toggleSearch}>
            </div>

            <div className={toggleMenu ? `${styles.navigation} ${styles.active}` : styles.navigation}>
                <div className={styles.cancel} onClick={() => setToggleMenu(false)}>
                    <FaTimes />
                </div>
                <h4>
                    <Link href="/home">
                        Home
                    </Link>
                </h4>
                {
                    data.map((cat, i) => (
                        <h4 key={i}>
                            <Link href={`/category/${cat.title}`}>
                                {cat.title}
                            </Link>
                        </h4>
                    ))
                }
            </div>

        </div>
    )
}

export default Header