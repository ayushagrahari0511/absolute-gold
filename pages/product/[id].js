import { useState, useEffect, forwardRef, useRef } from 'react'
import Layout from '../../shared/Layout'
import Link from 'next/link'
import styles from '../../styles/product.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingBag, faArrowLeft, faArrowRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import ProductCard from '../../shared/productCard/ProductCard'
import { productList } from "../../categoryData"
import { useRouter } from 'next/router'

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Autoplay, Navigation } from 'swiper'



const Product = () => {
    const router = useRouter()
    const [index, setIndex] = useState(0)
    const { slug, id } = router.query
    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    })
    const [favorate, setFavorate] = useState(false)
    const [open, setOpen] = useState(false)
    const [isSSR, setIsSSR] = useState(false)

    console.log(slug)
    useEffect(() => {
        setIsSSR(true);
    }, [])

    const productInfo = productList.find(item => item.id == slug)

    const handleFavorateOpen = () => {
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    return (
        <div className={`wrapper ${styles.wrapper}`}>
            <div className={`container ${styles.container}`}>
                <div className="navigation">
                    <Link href={`/home`}>Home</Link>
                    /
                    <Link href={`/category/earring`}>Earring</Link>
                    /
                    <p>
                        {productInfo && productInfo.title}
                    </p>
                </div>
                {
                    productInfo &&
                    <div className={styles.product_content}>
                        <div className={styles.product_img_wrapper}>
                            <div className={styles.product_img_container}>
                                <div className={styles.product_img}>
                                    <Image src={productInfo.img[index]} layout="fill" />
                                </div>
                            </div>
                            {
                                isSSR &&
                                <div className={styles.bottom_product_wrapper}>
                                    <div className={`bottom_carousel_left ${styles.bottom_carousel_left}`}>
                                        <FontAwesomeIcon icon={faAngleLeft} className={`${styles.bottom_carousel_icon}`} />
                                    </div>
                                    <div className={`bottom_carousel_right ${styles.bottom_carousel_right}`}>
                                        <FontAwesomeIcon icon={faAngleRight} className={`${styles.bottom_carousel_icon}`} />
                                    </div>
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={20}
                                        breakpoints={{
                                            991.98: {
                                                slidesPerView: 3,
                                                spaceBetween: 20,
                                            },
                                            767.98: {
                                                slidesPerView: 4,
                                                spaceBetween: 20,
                                            },
                                            575.98: {
                                                slidesPerView: 3,
                                                spaceBetween: 20,
                                            },
                                            200: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            }
                                        }}
                                        modules={[Pagination, Navigation]}
                                        navigation={{
                                            prevEl: ".bottom_carousel_left",
                                            nextEl: ".bottom_carousel_right",
                                        }}
                                        className={styles.swiper}>
                                        {
                                            productInfo.img.map((item, index) => (
                                                <SwiperSlide className={styles.list} key={index}>
                                                    <div className={styles.bottom_product_img} onClick={() => setIndex(index)}>
                                                        <Image src={item} layout="fill" />
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                            }
                        </div>
                        <div className={styles.product_info_wrapper}>
                            <div className={styles.product_title}>
                                <h3>{productInfo.title}</h3>
                                {
                                    favorate ? <FontAwesomeIcon icon={faHeart} className={styles.redHeart} onClick={() => {
                                        setFavorate(false)
                                        handleFavorateOpen()
                                    }} />
                                        :
                                        <FontAwesomeIcon icon={faHeart} className={styles.heart} onClick={() => {
                                            setFavorate(true)
                                            handleFavorateOpen()
                                        }} />
                                }


                            </div>
                            <Snackbar
                                autoHideDuration={1500}
                                onClose={handleClose}
                                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                                open={open}>
                                <h5 className={styles.favoratesnackbarAdded}>
                                    {
                                        favorate ? "Added to Favorate Successfully"
                                            :
                                            "Removed from Favorate"

                                    }
                                </h5>
                            </Snackbar>
                            <h5>{productInfo.productId}</h5>
                            <h5>{productInfo.desc}</h5>
                            <div className={styles.price}>
                                <h4>₹ {productInfo.price}</h4>
                                <h5>₹ {productInfo.realPrice}</h5>
                                {
                                    productInfo.inStock ?
                                        <h5 className={styles.inStock}>In Stock</h5>
                                        :
                                        <h5 className={styles.outStock}>Out Of Stock</h5>
                                }
                            </div>
                            <h2>Product Features:</h2>
                            <div className={styles.product_features}>
                                <div className={styles.feature_title}>
                                    <h5>Color</h5>
                                    <h5>Gross Wt.</h5>
                                    <h5>Net Wt.</h5>
                                    <h5>Hallmark</h5>
                                    <h5>Metal Gold</h5>
                                </div>
                                <div className={styles.feature_desc}>
                                    <h5>{productInfo.features.color}</h5>
                                    <h5>{productInfo.features['Gross Wt. ']}</h5>
                                    <h5>{productInfo.features['Net Wt.']}</h5>
                                    <h5>{productInfo.features.hallmark}</h5>
                                    <h5>{productInfo.features['Metal Gold']}</h5>
                                </div>
                            </div>
                            <button>
                                <FontAwesomeIcon icon={faShoppingBag} className={styles.shoppingBag} />
                                Buy now
                            </button>
                        </div>
                    </div>
                }
            </div>
            <div className={styles.mayLike}>
                <div className={`container ${styles.carousel_width}`}>
                    <div className={styles.carousel_title}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} className={styles.arrowRight} />
                        <h1>You May also Like</h1>
                    </div>
                    {
                        isSSR &&
                        <div className={styles.carousel_wrapper}>
                            <FontAwesomeIcon icon={faArrowLeft} className={`faArrowLeft ${styles.faArrowLeft}`} />
                            <FontAwesomeIcon icon={faArrowRight} className={`faArrowRight ${styles.faArrowRight}`} />
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                                modules={[Pagination, Autoplay, Navigation]}
                                navigation={{
                                    prevEl: ".faArrowLeft",
                                    nextEl: ".faArrowRight",
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    1199.98: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                        centeredSlides: false
                                    },
                                    767.98: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                        centeredSlides: false,
                                    },
                                    575.98: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    200: {
                                        centeredSlides: true,
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    }
                                }}
                                className={styles.swiper}>
                                {
                                    productList.map((item) => (
                                        <SwiperSlide className={styles.list} key={item.id}>
                                            <ProductCard item={item} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    }
                </div>
            </div>

            {/* ----------------------
            ------------- */}
            <div className={styles.recommended}>
                <div className='container'>
                    <div className={styles.carousel_title}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} className={styles.arrowRight} />
                        <h1>Recommendations</h1>
                    </div>
                    {
                        isSSR &&
                        <div className={styles.carousel_wrapper}>
                            <FontAwesomeIcon icon={faArrowLeft} className={`recommendArrowLeft ${styles.faArrowLeft}`} />
                            <FontAwesomeIcon icon={faArrowRight} className={`recommendArrowRight ${styles.faArrowRight}`} />
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                                modules={[Pagination, Autoplay, Navigation]}
                                navigation={{
                                    prevEl: ".recommendArrowLeft",
                                    nextEl: ".recommendArrowRight",
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    1199.98: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                        centeredSlides: false,
                                    },
                                    767.98: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                        centeredSlides: false,
                                    },
                                    575.98: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    200: {
                                        centeredSlides: true,
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    }
                                }}
                                className={styles.swiper}>
                                {
                                    productList.map((item) => (
                                        <SwiperSlide className={styles.list} key={item.id}>
                                            <ProductCard item={item} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

Product.getLayout = function GetLayout(page) {
    return (
        <Layout
            desc={`A multi-dimensional B2B Gold Trading platform.`}
            title={`Earrings Designs online`}
            img="/4.webp">
            {
                page
            }
        </Layout>
    )
}

export default Product