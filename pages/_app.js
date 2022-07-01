import { useState } from 'react'
import '../styles/globals.css'
import Loader from '../shared/HorizontalLoader/Loader'
import Router from 'next/router'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  
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
          getLayout(<Component { ...pageProps } />)
    }
    </>
  )
}

export default MyApp
