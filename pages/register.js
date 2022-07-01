import Main from '../components/Register/Main'
import Layout from '../shared/Layout'

const Register = () => {
  return (
    <div>
      <Main />
    </div>
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