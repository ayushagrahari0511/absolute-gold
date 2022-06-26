import styles from './NewArrivals.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { data } from './data'

const NewArrivals = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Image src="/prod-01.webp" width={300} height={400} />
                    <div className={styles.necklace}>
                        <h3>NECKLACE</h3>
                        <h4>
                            There is no one who loves pain itself, who
                            seeks after it and wants to have it,
                            simply because it is pain
                        </h4>
                        <Link href="/explore">
                            EXPLORE MORE
                        </Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right_title}>
                        <h1>NEW ARRIVALS</h1>
                        <Image src="/bell.webp" height={50} width={50} />
                    </div>
                    <div className={styles.arrivals_list}>
                        {
                            data.map((item) => (
                                <div className={styles.list} key={item.id}>
                                    <div>
                                        <Image src={item.img} height={300} width={300} />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <h4>
                                        {
                                            item.desc
                                        }
                                    </h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrivals