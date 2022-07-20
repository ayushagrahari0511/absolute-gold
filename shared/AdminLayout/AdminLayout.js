import styles from './AdminLayout.module.css'
import { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineMenu, AiOutlineFileAdd, AiFillDownCircle, AiOutlineHome } from 'react-icons/ai'
import { IoIosSearch, } from 'react-icons/io'
import { IoDiamondOutline, IoNotificationsOutline } from 'react-icons/io5'
import { VscMenu } from 'react-icons/vsc'
import { BiCog, BiCircle, } from 'react-icons/bi'
import { BsListTask, BsPinAngle } from 'react-icons/bs'
import { FaRegUser, FaAngleRight, FaDotCircle } from 'react-icons/fa'
import { ImLink } from 'react-icons/im'
import Router, { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import Loader from '../Loader/Loader'

const AdminLayout = ({ children }) => {
  const {user} = useSelector(state => state.auth)
  const [link, setLink] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isAuthorize, setIsAuthorize] = useState(false)
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true)
  })

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false)
  })

  Router.events.on("routeChangeError", (url) => {
    setLoading(false)
  })

  useEffect(() => {
    const links = router.asPath.split("/")[2]
    setLink(links)
  }, [router.asPath]);

  const handleLinkClick = (address) => {
    if (address) {
      setLink(address)
      setToggleMenu(true)
    }
  }
  return (
    <>
      <div className={styles.wrapper}>
        <aside className={toggleMenu ? `${styles.navigation_wrapper} ${styles.active}` : styles.navigation_wrapper}>
          <div className={styles.navigation_container}>
            <div className={styles.logo}>
              <Image src="/logo.webp" layout='fill' />
            </div>
            <Link href="/admin/dashboard">
              <div className={link == "dashboard" ? `${styles.links} ${styles.active}` : styles.links}
                onClick={() => handleLinkClick("dashboard")}>
                <AiOutlineHome className={styles.links_icon} />

                <span className={toggleMenu && styles.hide_menu}>
                  Dashboard
                </span>
              </div>
            </Link>
            <Link href="/admin/sellersListing">
              <div
                onClick={() => handleLinkClick("sellersListing")}
                className={link == "sellersListing" ? `${styles.links} ${styles.active}` : styles.links}>
                <BsListTask className={styles.links_icon} />
                <span className={toggleMenu && styles.hide_menu}>
                  Seller Listing
                </span>
              </div>
            </Link>
            <Link href="/admin/membership">
              <div
                onClick={() => handleLinkClick("membership")}
                className={link == "membership" ? `${styles.links} ${styles.active}` : styles.links}>
                <FaRegUser className={styles.links_icon} />
                <span className={toggleMenu && styles.hide_menu}>
                  Membership
                </span>
              </div>
            </Link>
            <Link href="/admin/reports">
              <div className={styles.bottom_navigation}>
                <div className={styles.title_left}>
                  <div
                    onClick={() => handleLinkClick("reports")}
                    className={link == "reports" ? `${styles.links} ${styles.active}` : styles.links}>
                    <AiOutlineFileAdd className={styles.links_icon} />
                    <span className={toggleMenu && styles.hide_menu}>
                      Reports
                    </span>
                  </div>
                  {/* <FaAngleRight /> */}
                </div>
                {/* <div className={styles.sub_links}>
                  <div className={styles.sub_links_list}>
                    <BiCircle /> Day Wise
                  </div>
                  <div className={styles.sub_links_list}>
                    <BiCircle /> Monthly
                  </div>
                  <div className={styles.sub_links_list}>
                    <BiCircle /> Location Wise
                  </div>
                </div> */}
              </div>
            </Link>
            <Link href="/admin/confirmation">
              <div className={styles.bottom_navigation}>
                <div className={styles.title_left}>
                  <div
                    onClick={() => handleLinkClick("confirmation")}
                    className={link == "confirmation" ? `${styles.links} ${styles.active}` : styles.links}>
                    <IoDiamondOutline className={styles.links_icon} />
                    <span className={toggleMenu && styles.hide_menu}>
                      Confirmation
                    </span>
                  </div>
                  {/* <FaAngleRight /> */}
                </div>
                {/* <div className={styles.sub_links}>
                  <div className={styles.sub_links_list}>
                    <BiCircle /> Buyers
                  </div>
                  <div className={styles.sub_links_list}>
                    <BiCircle /> Sellers
                  </div>
                </div> */}
              </div>
            </Link>
            <Link href="/admin/controlOver">
              <div className={styles.bottom_navigation}>
                <div className={styles.title_left}>
                  <div
                    onClick={() => handleLinkClick("controlOver")}
                    className={link == "controlOver" ? `${styles.links} ${styles.active}` : styles.links}>
                    <IoDiamondOutline className={styles.links_icon} />
                    <span className={toggleMenu && styles.hide_menu}>
                      Control Over
                    </span>
                  </div>
                  {/* <FaAngleRight /> */}
                </div>
                {/* <div className={styles.sub_links}>
                  <div className={styles.sub_links_list}>
                    <BiCircle /> Buyers
                  </div>
                  <div className={styles.sub_links_list}>
                    <BiCircle /> Sellers
                  </div>
                </div> */}
              </div>
            </Link>
            <Link href="/admin/generate_invoice">
              <div
                onClick={() => handleLinkClick("generate_invoice")}
                className={link == "generate_invoice" ? `${styles.links} ${styles.active}` : styles.links}>
                <AiOutlineFileAdd className={styles.links_icon} />
                <span className={toggleMenu && styles.hide_menu}>
                  Generating Invoice
                </span>
              </div>
            </Link>
            <Link href="/admin/category">
              <div
                onClick={() => handleLinkClick("category")}
                className={link == "category" ? `${styles.links} ${styles.active}` : styles.links}>
                <BsPinAngle className={styles.links_icon} />
                <span className={toggleMenu && styles.hide_menu}>
                  Product Category
                </span>
              </div>
            </Link>
            <Link href="/admin/product_link">
              <div
                onClick={() => handleLinkClick("product_link")}
                className={link == "product_link" ? `${styles.links} ${styles.active}` : styles.links}>
                <ImLink className={styles.links_icon} />
                <span className={toggleMenu && styles.hide_menu}>
                  Product Link
                </span>
              </div>
            </Link>
            <Link href="/admin/media_management">
              <div
                onClick={() => handleLinkClick("media_management")}
                className={link == "media_management" ? `${styles.links} ${styles.active}` : styles.links}>
                <BiCog className={styles.links_icon} />
                <span className={toggleMenu && styles.hide_menu}>
                  Media Management
                </span>
              </div>
            </Link>
          </div>
        </aside>
        <div className={styles.container}>
          <header>
            <div className={styles.header_left}>
              <IconButton onClick={() => setToggleMenu(!toggleMenu)}>
                <VscMenu className={styles.menuIcon} />
              </IconButton>
              <div className={styles.vertical_line}>
              </div>
              <form>
                <label htmlFor='search'>
                  <IconButton>
                    <IoIosSearch className={styles.menuIcon} />
                  </IconButton>
                  <input type="text" id="search" placeholder='SEARCH ANYTHING...' />
                </label>
              </form>
            </div>
            <div className={styles.header_right}>
              <Link href="/admin/inbox">
                <span className={styles.notification}>
                  <div>
                    <IoNotificationsOutline className={styles.notification_icon} />
                    <span className={styles.inbox_active}></span>
                  </div>
                  <h6>
                    Messages
                  </h6>
                </span>
              </Link>
              <div className={styles.vertical_line}>
              </div>
              <IconButton onClick={() => setDropDown(!dropDown)}>
                <div className={styles.profilePic}>
                  <Image src="/6.webp" width={40} height={40} style={{ borderRadius: "50%" }} />
                </div>
              </IconButton>
            </div>
            <div className={dropDown ? `${styles.dropdown_menu} ${styles.active}` : styles.dropdown_menu}>
              <li>Manage Accounts</li>
              <li>Change Password</li>
              <li>Check Inbox</li>
              <li>Sing Out</li>
            </div>
            <div
              onClick={() => setDropDown(false)}
              className={dropDown ? `${styles.dropDown_Hide} ${styles.active}` : styles.dropDown_Hide}>

            </div>
          </header>
          <div className={styles.content}>
            {
              loading ? <Loader />
                :
                children
            }
          </div>
        </div>
      </div >
    </>
  )
}

export default AdminLayout