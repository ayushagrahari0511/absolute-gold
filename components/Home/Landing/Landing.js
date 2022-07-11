import { useState } from 'react'
import styles from './Landing.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FaRegUser, FaTimes } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'
import { data } from '../Categories/data'

const Landing = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.background_img}>
            <Image src="/banner_img.webp" layout='fill' alt="absolute gold" />
        </div>
        <div className={styles.container}>
          <header>
            <div className={styles.logo}>
              <Image src="/logo.png" width={100} height={100} alt="" />
            </div>
            <div className={styles.links}>
              <form className={styles.search_container}>
                <label htmlFor="search">
                  <FontAwesomeIcon icon={faSearch} className={styles.search} />
                </label>
                <input type="text" id='search' placeholder='Search topics or keyword' />
                <div className={styles.microphone}>
                  <FontAwesomeIcon icon={faMicrophone} className={styles.mike} />
                </div>
              </form>
              <div className={styles.login}>
                <Link href="/login">
                  <span>
                    <FaRegUser />
                    <h5>
                      LOGIN
                    </h5>
                  </span>
                </Link>
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