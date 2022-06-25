import styles from './Landing.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons'

const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <div className={styles.logo}>
            <img src="/logo.png" alt="" />
          </div>
          <div className={styles.links}>
            <div className={styles.login}>
              <Link href="/login">
                LOGIN
              </Link>
              <span>|</span>
              <Link href="/register">
                SIGN IN
              </Link>
            </div>
            <form className={styles.search_container}>
              <label htmlFor="search">
                <FontAwesomeIcon icon={faSearch} className={styles.search} />
              </label>
              <input type="text" id='search' placeholder='Search topics or keyword' />
              <div className={styles.microphone}>
                <FontAwesomeIcon icon={faMicrophone} className={styles.mike} />
              </div>
            </form>
          </div>
        </header>
        <div className={styles.description}>
          <h1>ABSOLUTE GOLD</h1>
          <h3>IS YOUR QUEST FOR GOLD</h3>
          <h5>A multi dimension B2B platform for Gold traders</h5>
          <Link href="/more">
            KNOW MORE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing