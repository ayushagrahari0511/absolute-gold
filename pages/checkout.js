import { useState } from 'react'
import Layout from '../shared/Layout'
import styles from '../styles/checkout.module.css'
import Link from 'next/link'
import { countries } from '../countries'

const Checkout = () => {
    const [address, setAddress] = useState("address1")
    return (
        <div className='wrapper'>
            <div className={`container ${styles.container}`}>
                <div className="navigation">
                    <Link href={`/home`}>Home</Link>
                    /
                    <p>
                        Checkout
                    </p>
                </div>
                <div className={styles.fill_form}>
                    <div className={styles.form}>
                        {
                            address === "address1" ?
                                <form>
                                    <h2 className={styles.form_header}>Billing details</h2>
                                    <input type="text" placeholder='Name' />
                                    <input type="email" placeholder='Email Address' />
                                    <input type="number" name="phone" placeholder='Phone Number' />
                                    <select name="country" id="country" placeholder='Country'>
                                        <option value="country" defaultChecked>country</option>
                                        {
                                            countries.map((country, i) => (
                                                <option value={country.label} key={i}>{country.label}</option>
                                            ))
                                        }
                                    </select>
                                    <input type="text" placeholder='Town / City' />
                                    <input type="text" placeholder='Address' />
                                    <input type="password" name="password" placeholder='Password' />
                                    <input type="password" name="confirmPassword" placeholder='Confirm Password' />
                                    <textarea name="notes" cols="30" rows="10" placeholder='Order notes here'></textarea>
                                    <div className={styles.customerAddress} onClick={() => {
                                        setAddress("address2")
                                        scrollTo(0, 0)
                                    }}>
                                        Ship to Different Address
                                    </div>
                                </form>
                                :
                                <form>
                                    <h2 className={styles.form_header}>Ship to different address</h2>
                                    <input type="text" placeholder='Name' />
                                    <input type="email" placeholder='Email Address' />
                                    <input type="number" name="phone" placeholder='Phone Number' />
                                    <select name="country" id="country" placeholder='Country'>
                                        <option value="country" defaultChecked>country</option>
                                        {
                                            countries.map((country, i) => (
                                                <option value={country.label} key={i}>{country.label}</option>
                                            ))
                                        }
                                    </select>
                                    <input type="text" placeholder='Town / City' />
                                    <input type="text" placeholder='Address' />
                                    <input type="password" name="password" placeholder='Password' />
                                    <input type="password" name="confirmPassword" placeholder='Confirm Password' />
                                    <textarea name="notes" cols="30" rows="10" placeholder='Order notes here'></textarea>
                                    <div className={styles.customerAddress} onClick={() => {
                                        setAddress("address1")
                                        scrollTo(0, 0)
                                    }}>
                                        Ship to Your Address
                                    </div>
                                </form>

                        }
                    </div>
                    <div className={styles.orders}>
                        <h2 className={styles.form_header}>Your order</h2>
                        <div className={styles.orders_wrapper}>
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
                            <form className={styles.place_order}>
                                <div>
                                    <input type="radio" name="payment_method" id="bank" value="bank" defaultChecked />
                                    <label htmlFor="bank">direct bank transfer</label>
                                </div>
                                <div>
                                    <input type="radio" name="payment_method" id="cheque" value="cheque" />
                                    <label htmlFor="cheque">cheque payment</label>
                                </div>
                                <div>
                                    <input type="radio" name="payment_method" id="paypal" value="paypal" />
                                    <label htmlFor="paypal">paypal</label>
                                </div>
                            </form>
                            <button>
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Checkout.getLayout = function (page) {
    return (
        <Layout img="/4.webp" title="checkout">
            {page}
        </Layout>
    )
}

export default Checkout