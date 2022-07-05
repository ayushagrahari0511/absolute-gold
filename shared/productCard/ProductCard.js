import styles from './ProductCard.module.css'
import Rating from '@mui/material/Rating'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const ProductCard = ({ item }) => {
    return (
        <Link href={`/product/${item.title}?slug=${item.id}`}>
            <div className={styles.product_container}>
                <div className={styles.product_img}>
                    <Image layout="fill" src={item.img[0]} />
                    {
                        item.isNew && <h5>New</h5>
                    }
                    <div className={styles.shopping}>
                        <div className={styles.cart}>
                            <FontAwesomeIcon icon={faShoppingBag} className={styles.cartIcon} />
                        </div>
                        <div className={styles.cart}>
                            <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
                        </div>
                    </div>
                </div>
                <div className={styles.new}>
                </div>
                <h4>{item.title}</h4>
                <div className={styles.price}>
                    <h3>${item.price}</h3>
                    <Rating
                        name="disabled"
                        readOnly
                        precision={0.1}
                        value={item.rating}
                        size="large"
                    />
                </div>
            </div>
        </Link>
    )
}

export default ProductCard