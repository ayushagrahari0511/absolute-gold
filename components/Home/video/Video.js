import React, { useRef, useState } from 'react'
import styles from './Video.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'

const Video = () => {
  const [isPlay, setIsPlay] = useState(false)
  const videoRef = useRef(null);
  return (
    <div className={styles.wrapper}>
      <video
        autoPlay
        loop
        muted
        ref={videoRef}
        src="/B2BGold.mp4"
        playsInline>
        <source src="/B2BGold.webm" type="video/webm" />
      </video>
      <div className={styles.skip}>
        SKIP
        <FontAwesomeIcon icon={faHandPointRight} className={styles.skipIcon} />
      </div>
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
  )
}

export default Video