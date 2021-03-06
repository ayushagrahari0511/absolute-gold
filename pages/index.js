import { useState, useRef } from 'react'
import Head from 'next/head'
import styles from '../styles/index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import RouteChange from '../shared/RouteChange'


export default function Home() {
  const [isPlay, setIsPlay] = useState(false)
  const videoRef = useRef(null);

  return (
    <RouteChange>
      <div className={styles.container}>
        <Head>
          <title>Absolute Gold</title>
          <meta name="description" content="Welcome To The Finest B2B Gold Trading Platform" />
          <link rel="icon" href="/logo.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.wrapper}>
            <video
              autoPlay
              loop
              muted
              ref={videoRef}
              src="https://absolute-gold-backend.herokuapp.com/assets/video"
              playsInline>
              <source src="/B2BGold.webm" type="video/webm" />
            </video>
            <Link href="/welcome">
              <div className={styles.skip}>
                SKIP
                <FontAwesomeIcon icon={faHandPointRight} className={styles.skipIcon} />
              </div>
            </Link>
            <div className={styles.play} >
              {
                isPlay ?
                  <FontAwesomeIcon className={styles.icon} icon={faVolumeXmark} onClick={() => {
                    setIsPlay(false)
                    videoRef.current.muted = true;
                  }} />
                  :
                  <FontAwesomeIcon className={styles.icon} icon={faVolumeHigh} onClick={() => {
                    setIsPlay(true)
                    videoRef.current.muted = false;
                  }}
                  />
              }
            </div>
          </div>
        </main>

      </div>
    </RouteChange>
  )
}
