import Loader from "./HorizontalLoader/Loader"
import Router from 'next/router'
import { useState } from 'react'


const RouteChange = ({children}) => {
    const [loading, setLoading] = useState(false)
    Router.events.on("routeChangeStart", (url) => {
        setLoading(true)
      })
    
      Router.events.on("routeChangeComplete", (url) => {
        setLoading(false)
      })
    
      Router.events.on("routeChangeError", (url) => {
        setLoading(false)
      })
    
  return (
    <>
        {
            
                loading ? <Loader />
                  :
                  children
            
        }
    </>
  )
}

export default RouteChange