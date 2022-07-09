import Footer from '../components/Home/Footer/Footer'
import NewsLetter from "../components/Home/NewsLetter/NewsLetter";
import Header from './Header/Header';
import RouteChange from './RouteChange';

export default function Layout({ children, img, desc, title }) {
    return (
        <>
            <RouteChange>
                <Header img={img} desc={desc} title={title} />
                <main>
                    {children}
                </main>
                <NewsLetter />
                <Footer />
            </RouteChange>
        </>
    )
}