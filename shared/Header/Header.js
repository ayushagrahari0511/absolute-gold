import { useState } from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FaRegUser, FaTimes } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import {data} from '../../components/Home/Categories/data'

const Header = ({ desc, img, title }) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className={`registerHeader ${styles.wrapper}`}
            style={{
                background: `url(${img})`,
            }}
        >
            <div className={styles.container}>
                <div className={styles.searchInput}>
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