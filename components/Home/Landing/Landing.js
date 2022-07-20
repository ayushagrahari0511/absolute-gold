import { useState } from 'react'
import styles from './Landing.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FaRegUser, FaUserAlt, FaTimes, FaCog, FaHeart } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { IoCart } from 'react-icons/io5'
import axios from 'axios'
import { CgDollar } from 'react-icons/cg'
import { RiShoppingBag3Fill, RiLogoutCircleLine } from 'react-icons/ri'
import { data } from '../Categories/data'
import { useSelector } from 'react-redux'

const cart = "03"

const Landing = () => {
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
    const {data} = await axios.get(`${process.env.BASEURL}/api/logout`, {
      withCredentials: true,
      credentials: 'include'
})

    if(data) {
      router.reload('/home')
    }
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.background_img}>
          <img src="/banner_img.webp" alt="absolute gold" />
        </div>
        <div className={styles.container}>
          <header>
            <div className={styles.logo}>
              <Image src="/logo.png" width={100} height={100} alt="" />
            </div>
            <div className={styles.links}>
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
          </header>
          <div className={styles.description}>
            <h1>ABSOLUTE GOLD</h1>
            <h3>IS YOUR QUEST FOR GOLD</h3>
            <h5>A multi-dimensional B2B Trading platform , as the name implies, provides a single platform for Gold traders from Africa to get together to acquire and enjoy services or commodities.</h5>
            <Link href="/more">
              KNOW MORE
            </Link>
          </div>
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
    </>
  )
}

export default Landing