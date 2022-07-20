import { store } from '../store'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import ProtectedRoute from '../ProtectedRoute'

function MyApp({ Component, pageProps }) {
  // const dispatch = useDispatch()
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)


  return (
    <>
      <Provider store={store}>
        <ProtectedRoute>
          {
            getLayout(<Component {...pageProps} />)
          }
        </ProtectedRoute>
      </Provider>
    </>
  )
}

export default MyApp
