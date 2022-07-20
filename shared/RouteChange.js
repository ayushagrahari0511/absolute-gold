import Loader from "./HorizontalLoader/Loader"
import Router from 'next/router'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"


const RouteChange = ({ children }) => {
  const { user } = useSelector(state => state.auth)
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    const hideContent = () => {
      setLoading(true)
    }
    // on route change start
    router.events.on('routeChangeStart', hideContent)

    // 
    router.events.on('routeChangeComplete', authCheck)

    return () => {
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url) {

    // redirect to login page if accessing a private page and not logged in
    const privatePaths = ['/cart', '/wishlist', '/checkout', '/orders', '/my_account', '/admin/dashboard']
    const path = url.split('?')[0];

    if (!user && privatePaths.includes(path)) {
      setLoading(true);
      router.push({
        pathname: '/login',
        query: {
          returnUrl: router.asPath
        }
      })
    }
    else if (user && ['/', '/login', '/register'].includes(path)) {
      setLoading(true);
      router.push('/welcome')
    }
    else {
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }
  }

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