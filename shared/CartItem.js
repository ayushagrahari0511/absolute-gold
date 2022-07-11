import { useState } from 'react'
import styles from '../styles/cart.module.css'
import Image from 'next/image'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'


const CartItem = ({ img, price }) => {
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (type) => {
        if (type === "increment") {
            setQuantity(quantity + 1)
        }

        if (type === "decrement") {
            quantity === 1 ? setQuantity(quantity) : setQuantity(quantity - 1)
        }
    }

    const decimals = (n, d) => {
        if ((typeof n !== 'number') || (typeof d !== 'number'))
            return false;
        n = parseFloat(n) || 0;
        return n.toFixed(d);
    }
    return (
        <tr>
            <td className={styles.product_image}>
                <div className={styles.img}>
                    <Image src={img} layout='fill' />
                </div>
                <div className={styles.description}>
                    <h5>
                        Product Title demo
                    </h5>
                    <h6>
                        Product: Description
                    </h6>
                </div>
            </td>
            <td className={styles.price}>
                <span>Price: </span>
                ${decimals(price, 2)}
            </td>
            <td>
                <div className={styles.quantity}>
                    <div onClick={() => handleQuantity("decrement")} >
                        <AiOutlineMinus />
                    </div>
                    <h4>{quantity}</h4>
                    <div onClick={() => handleQuantity("increment")} >
                        <AiOutlinePlus />
                    </div>
                </div>
            </td>
            <td className={styles.price}>
            <span>Total Price: </span>
                ${decimals((price * quantity), 2)}
            </td>
            <td className={styles.cancel}>
                <button>
                    <ImCancelCircle />
                    <h6>Remove</h6>
                </button>
            </td>
        </tr>
    )
}

export default CartItem