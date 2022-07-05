import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Categories.module.css'
import Image from 'next/image'
import Link from 'next/link'

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Autoplay } from 'swiper'

const data = [
    {
        id: 1,
        img: "/cat_1.webp",
        title: "bangles",
        url: '/category/bangles'
    },
    {
        id: 2,
        img: "/cat_2.webp",
        title: "pendant",
        url: '/category/pendant',
    }, {
        id: 3,
        img: "/cat_3.webp",
        title: "rings",
        url: '/category/rings'
    }, {
        id: 4,
        img: "/cat_4.webp",
        title: "earrings",
        url: '/category/earrings',
    }, {
        id: 5,
        img: "/cat_5.webp",
        title: "necklace",
        url: '/category/necklace'
    }, {
        id: 6,
        img: "/cat_6.webp",
        title: "bracelet",
        url: '/category/bracelet'
    },
]

const Categories = () => {
    const [isSSR, setIsSSR] = useState(false)

    useEffect(() => {
        setIsSSR(true);
    }, [])
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>
                        CATEGORIES
                    </h1>
                    <Image src="/bell2.webp" width={50} height={50} />
                </div>
                <div className={`my_swiper ${styles.my_swiper}`}>
                    {
                        isSSR &&
                        <Swiper
                            slidesPerView={3.5}
                            spaceBetween={20}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                                type: 'bullets'
                            }}
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                767.98: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 20,
                                },
                                575.98: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 20,
                                },
                                200: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20
                                }
                            }}
                            loop={true}
                            className={styles.swiper}>
                            {
                                data.map((item) => (
                                    <SwiperSlide key={item.id} className={styles.list}>
                                        <Link href={`/category/${item.title}`}>
                                            <div className={styles.categories}>
                                                <Image src={item.img} width={310} height={300} />
                                                <h3>{item.title}</h3>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories