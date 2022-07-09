import {useState, useRef, useEffect} from 'react'
import styles from './CardDisplay.module.css'
import Link from 'next/link'
import CounterUp from '../CounterUp'

const CardDisplay = ({ currency , backgroundColor, icon, iconColor, total, totalColor, title, titleColor }) => {
    const [state, setState] = useState(null)
    const ref = useRef(0)
  
    const accumulator = total/100;
  
    const updateCounterState = () => {
      if ( ref.current < total) {
        const result = Math.ceil(ref.current + accumulator)
        if(result > total) return setState(total)
        setState(result)
        ref.current = result
      }
      setTimeout(updateCounterState, 25)
    }
  
    useEffect(() => {
      let isMounted = true;
      if(isMounted) {
        updateCounterState()
      }
  
      return () => (isMounted = false);
    }, [total])

    return (
        <div
            style={{
                background: backgroundColor,
            }}
            className={styles.wrapper} >
            <Link href="/admin/dashboard">
                <>
                    <div className={styles.icon} style={{ color: iconColor }}>
                        {icon}
                    </div>
                    <h4 style={{ color: totalColor }}>
                       {currency && currency} {state}
                    </h4>
                    <h6 style={{ color: titleColor }}>
                        {title}
                    </h6>
                </>
            </Link>
        </div>
    )
}

export default CardDisplay