import { useState, useEffect } from 'react'
import Layout from '../shared/Layout'
import Link from 'next/link'
import styles from '../styles/cart.module.css'
import Image from 'next/image'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
import CartItem from '../shared/CartItem'

const Cart = () => {
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
                        Cart
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
                                <th>QUANTITY</th>
                                <th>TOTAL PRICE</th>
                                <th>REMOVE</th>
                            </tr>
                            <CartItem img={"/products/S2001-1.webp"} price={52.00} />
                            <CartItem img={"/products/S2067-1.webp"} price={52.00} />
                            <CartItem img={"/products/S2081-1.webp"} price={52.00} />
                        </tbody>
                    </table>
                }

                <div className={styles.proceed}>
                    <Link href="/home">
                        Shop More
                    </Link>
                    <Link href="/checkout">
                        <div className={styles.checkout}>
                            Proceed to Checkout
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

Cart.getLayout = function GetLayout(page) {
    return (
        <Layout img="/4.webp" title="cart">
            {
                page
            }
        </Layout>
    )
}

export default Cart