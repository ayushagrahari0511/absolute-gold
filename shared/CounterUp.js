import {useState, useRef, useEffect} from 'react'

const CounterUp = ({total}) => {
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
    state
  )
}

export default CounterUp