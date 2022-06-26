import Head from 'next/head'
import Landing from '../components/Home/Landing/Landing'
import NewArrivals from '../components/Home/NewArrivals/NewArrivals'
import NewsLetter from '../components/Home/NewsLetter/NewsLetter'
import Footer from '../components/Home/Footer/Footer'

const Home = () => {
    return (
        <>
            <Head>
                <title>Absolute Gold</title>
                <meta name="description" content="Welcome To The Finest B2B Gold Trading Platform" />
            </Head>
            <div>
                <Landing />
                <NewArrivals />
                <NewsLetter />
                <Footer />
            </div>
        </>
    )
}

export default Home