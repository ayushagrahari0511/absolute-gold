import Layout from '../shared/Layout'
import Header from '../shared/Header/Header'
import Main from '../components/Login/Main/Main'
import Head from 'next/head'

const login = () => {
  return (
    <>
      <Head>
          <title>
            Absolute Gold - Login
          </title>
      </Head>
      <div>
        <Main />
      </div>
    </>
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