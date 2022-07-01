import Layout from '../shared/Layout'
import Header from '../shared/Header/Header'
import Main from '../components/Login/Main/Main'

const login = () => {
  return (
    <div>
      <Main />
    </div>
  )
}

login.getLayout = function getLayout(page) {
  return (
    <Layout img="/3.webp">
      {
        page
      }
    </Layout>
  )
}

export default login