import Layout from "../../../shared/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../../../styles/subCategory.module.css'
import Head from "next/head"
import Filters from "../../../shared/Filters/Filters"
import ProductCard from "../../../shared/productCard/ProductCard"
import { productList } from "../../../categoryData"

const Slug = () => {
    const router = useRouter()
    const { category, slug } = router.query
    return (
        <>
            <Head>
                <title>
                    {slug && slug.toUpperCase()}
                </title>
            </Head>
            <div className="wrapper">
                <div className={`container ${styles.container}`}>
                    <div className="navigation">
                        <Link href={`/home`}>Home</Link>
                        /
                        {
                            category &&
                            <Link href={`/category/${category}`}>{category}</Link>
                        }
                        /
                        <p>
                            {`${slug} designs`}
                        </p>
                    </div>
                    <div className={styles.bottom_content}>
                        <Filters />
                        <div className={styles.productList}>
                            <div className={styles.sort}>
                                Sort By:
                                <button>
                                    Popularity
                                </button>
                                <button>
                                    Low Price
                                </button>
                                <button>
                                    High Price
                                </button>
                            </div>
                            <div className={styles.totalResults}>
                                1-15 of 4946 Matched Results
                            </div>
                            <div className={styles.product_wrapper}>
                                {
                                    productList.map((item) => (
                                        <ProductCard item={item} key={item.id} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Slug.getLayout = function GetLayout(page) {
    const router = useRouter()
    const { category, slug } = router.query
    return (
        <Layout
            title={`${slug} Designs`}
            desc={`A multi dimension B2B platform for Gold traders`}
            img="/4.webp">
            <main>
                {page}
            </main>
        </Layout>
    )
}

export default Slug