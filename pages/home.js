import Head from 'next/head'
import Landing from '../components/Home/Landing/Landing'
import NewArrivals from '../components/Home/NewArrivals/NewArrivals'
import NewsLetter from '../components/Home/NewsLetter/NewsLetter'
import Footer from '../shared/Footer/Footer'
import Categories from '../components/Home/Categories/Categories'
import RouteChange from '../shared/RouteChange'

const Home = () => {
    return (
        <>
            <Head>
                <title>Absolute Gold</title>
                <meta name="description" content="Welcome To The Finest B2B Gold Trading Platform" />
            </Head>
            <RouteChange>
                <div>
                    <Landing />
                    <Categories />
                    <NewArrivals />
                    <NewsLetter />
                    <Footer />
                </div>
            </RouteChange>
        </>
    )
}

export default Home