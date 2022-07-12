import Layout from '../shared/Layout'
import styles from '../styles/orders.module.css'
import Link from 'next/link'

const Orders = () => {
    return (
        <div className="wrapper">
            <div className={`container ${styles.container}`}>
                <div className="navigation">
                    <Link href={`/home`}>Home</Link>
                    /
                    <p>
                        Order Complete
                    </p>
                </div>
                <div className={styles.isActive}>
                    Thank you. Your order has been received.
                </div>
                <div className={styles.order_wrapper}>
                    <div className={styles.order_meta_info}>
                        <div className={styles.meta_container}>
                            <h4>
                                Order no
                            </h4>
                            <h5>
                                M 2653257
                            </h5>
                        </div>
                        <div className={styles.meta_container}>
                            <h4>
                                Date
                            </h4>
                            <h5>
                                MAY 15, 2021
                            </h5>
                        </div>
                        <div className={styles.meta_container}>
                            <h4>
                                Total
                            </h4>
                            <h5>
                                $186.00
                            </h5>
                        </div>
                        <div className={styles.meta_container}>
                            <h4>
                                Payment Method
                            </h4>
                            <h5>
                                Cheque Payment
                            </h5>
                        </div>
                    </div>
                    <div className={styles.order_description}>
                        <div className={styles.orders_wrapper}>
                            <h2 className={styles.form_header}>
                                Your Order
                            </h2>
                            <div className={styles.orders_title}>
                                <h4>PRODUCT</h4>
                                <h4>total</h4>
                            </div>
                            <div className={styles.orders_details}>
                                <div className={styles.order_info}>
                                    <div>
                                        <h5>men shoes x 01</h5>
                                        <h6>Color: Red & Size: 9</h6>
                                    </div>
                                    <h5>$56.00</h5>
                                </div>
                                <div className={styles.order_info}>
                                    <div>
                                        <h5>women shoes x 02</h5>
                                        <h6>Color: Red & Size: 8</h6>
                                    </div>
                                    <h5>$120.00</h5>
                                </div>
                                <div className={styles.order_info}>
                                    <div>
                                        <h5>shipping & handling</h5>
                                    </div>
                                    <h5>$10.00</h5>
                                </div>
                            </div>
                            <div className={`${styles.orders_title} ${styles.active}`}>
                                <h4>sub total</h4>
                                <h4>$186.00</h4>
                            </div>
                        </div>
                        <div className={styles.order_address}>
                            <div className={styles.order_billing}>
                                <h2 className={styles.form_header}>
                                    Billing Address
                                </h2>
                                <p>
                                    CREZY FASHION, Road no # 45, block B/2, House no # 12/120, Bonoshree, Dhaka Bangladesh.
                                </p>
                            </div>
                            <div className={styles.order_billing}>
                                <h2 className={styles.form_header}>
                                    Shipping Address
                                </h2>
                                <p>
                                    CREZY FASHION, Road no # 45, block B/2, House no # 12/120, Bonoshree, Dhaka Bangladesh.
                                </p>
                            </div>
                            <div className={styles.order_billing}>
                                <h2 className={styles.form_header}>
                                    Customer Details
                                </h2>
                                <div>
                                    <h5>Name:
                                        <span className={styles.customer_info}>
                                            MD: Rakib Hossain
                                        </span>
                                    </h5>
                                </div>
                                <div>
                                    <h5>Email:
                                        <span className={styles.customer_info}>
                                            info@domainname.com
                                        </span>
                                    </h5>
                                </div><div>
                                    <h5>Telephone:
                                        <span className={styles.customer_info}>
                                            (+202) 9876641056
                                        </span>
                                    </h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Orders.getLayout = function GetLayout(page) {
    return (
        <Layout img="/4.webp" title="Order Complete">
            {page}
        </Layout>
    )
}

export default Orders