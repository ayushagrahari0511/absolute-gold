import Head from 'next/head'
import Landing from '../components/Home/Landing/Landing'
import NewsLetter from '../components/Home/NewsLetter/NewsLetter'

const Home = () => {
    return (
        <>
            <Head>
                <title>Absolute Gold</title>
                <meta name="description" content="Welcome To The Finest B2B Gold Trading Platform" />
            </Head>
            <div>
                <Landing />
                <NewsLetter />
            </div>
        </>
    )
}

export default Home