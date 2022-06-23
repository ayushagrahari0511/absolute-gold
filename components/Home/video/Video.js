import React, { useRef, useState } from 'react'
import styles from './Video.module.css'

const Video = () => {
  const [isPlay, setIsPlay] = useState(false)
  const videoRef = useRef(null);
  return (
    <div className={styles.wrapper}>
      <video autoPlay loop muted ref={videoRef} playsInline>
        <source src="/B2BGold.webm" type="video/webm" />
      </video>
      <div className={styles.skip}>
        SKIP
        <i className='fas fa-hand-point-right' />
      </div>
      <div className={styles.play} >
        {
          isPlay ?
            <i className="fa-solid fa-volume-xmark" onClick={() => {
              setIsPlay(false)
              videoRef.current.muted = true;
            }} />
            :
            <i className="fa-solid fa-volume-high" onClick={() => {
              setIsPlay(true)
              videoRef.current.muted = false;
            }} />
        }
      </div>
    </div>
  )
}

export default Video