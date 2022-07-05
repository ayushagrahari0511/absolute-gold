import Main from '../components/Register/Main'
import Layout from '../shared/Layout'
import Head from 'next/head'

const Register = () => {
  return (
    <>
    <Head>
      <title>
        Absolute Gold - Create Account
      </title>
    </Head>
    <div>
      <Main />
    </div>
    </>
  )
}

Register.getLayout = function getLayout(page) {
  return (
    <Layout img="/4.webp">
      {
        page
      }
    </Layout>
  )
}


export default Register