import { useState, useEffect } from 'react'
import Layout from '../shared/Layout'
import Link from 'next/link'
import styles from '../styles/wishlist.module.css'
import WishlistItem from '../shared/WishlistItem'

const Wishlist = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, []);

    return (
        <div className='wrapper'>
            <div className={`container ${styles.container}`}>
                <div className="navigation">
                    <Link href={`/home`}>Home</Link>
                    /
                    <p>
                        Wishlist
                    </p>
                </div>
                {
                    isMounted &&

                    <table >
                        <tbody className={styles.cart_wrapper}>
                            <tr className={styles.cart_header}>
                                <th>
                                    ITEMS
                                </th>
                                <th>PRICE</th>
                                <th>STOCK STATUS</th>
                                <th>ADD TO CART</th>
                                <th>REMOVE</th>
                            </tr>
                            <WishlistItem img={"/products/S2001-1.webp"} price={52.00} inStock={true} />
                            <WishlistItem img={"/products/S2067-1.webp"} price={52.00} inStock={true}/>
                            <WishlistItem img={"/products/S2081-1.webp"} price={52.00} inStock={false}/>
                        </tbody>
                    </table>
                }

                <div className={styles.proceed}>
                    <Link href="/home">
                        View More
                    </Link>
                    <Link href="/cart">
                        <div className={styles.checkout}>
                            Go to Cart
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

Wishlist.getLayout = function GetLayout(page) {
    return (
        <Layout img="/4.webp" title="Wishlist">
            {
                page
            }
        </Layout>
    )
}

export default Wishlist