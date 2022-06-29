import Footer from '../components/Home/Footer/Footer'
import NewsLetter from '../components/Home/NewsLetter/NewsLetter'
import Header from '../components/Login/Header/Header'
import Main from '../components/Login/Main/Main'

const login = () => {
  return (
    <div>
        <Header/>
        <Main/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default login