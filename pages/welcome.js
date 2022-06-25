import React from 'react'
import Head from 'next/head'
import styles from '../styles/welcome.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'


const Welcome = () => {
  return (
    <>
      <Head>
        <title>Absolute Gold</title>
        <meta name="description" content="Welcome To The Finest B2B Gold Trading Platform" />
      </Head>
      <div className={styles.wrapper}>
        <header>
          <Link href="/register">
            <div className={styles.skip}>
              <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
              Register/login
            </div>
          </Link>
          <Link href="/home">
            <div className={styles.skip}>
              SKIP
              <FontAwesomeIcon icon={faHandPointRight} className={styles.skipIcon} />
            </div>
          </Link>
          <Image src="/logo.png" alt="logo" width={200} height={200} />
        </header>
        <div className={styles.desc}>
          <h1>Welcome to the finest b2b gold trading platform</h1>
        </div>
      </div>
    </>
  )
}

export default Welcome