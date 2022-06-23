import React from 'react'
import styles from '../styles/welcome.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'


const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <Link href="/">
          <div className={styles.skip}>
            <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
            Register/login
          </div>
        </Link>
        <Link href="/">
          <div className={styles.skip}>
            SKIP
            <FontAwesomeIcon icon={faHandPointRight} className={styles.skipIcon} />
          </div>
        </Link>
        <img src="/logo.png" alt="" />
      </header>
      <div className={styles.desc}>
        <h1>Welcome to the finest b2b <br /> gold trading platform</h1>
      </div>
    </div>
  )
}

export default Welcome